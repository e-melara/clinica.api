import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import {
  DataSource,
  EntityTarget,
  FindOptionsWhere,
  QueryRunner,
} from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

import { StepCreateDto } from './dto/step.dto';
import { PageOptionsDto } from './dto/page-options.dto';
import { PacienteCreateDto } from './dto/paciente-create.dto';
import { HistoricoPaciente, Paciente, Step } from './entities';
import { Persona, Configuracion, Documento, Contacto } from 'src/auth/entities';

interface NamedThing {
  id: number;
}

@Injectable()
export class PacientesService {
  constructor(private readonly dataSource: DataSource) {}

  async findAll(pageOptionsDto: PageOptionsDto) {
    const respository = this.dataSource.manager.getRepository(Paciente);
    const queryBuilder = respository
      .createQueryBuilder('paciente')
      .leftJoinAndSelect('paciente.persona', 'persona');

    if (pageOptionsDto.q) {
      queryBuilder.andWhere(
        'persona.nombre LIKE :q OR persona.apellido LIKE :q OR paciente.numero_expendiente LIKE :q',
        { q: `%${pageOptionsDto.q}%` },
      );
    }

    queryBuilder
      .orderBy('persona.created_at', pageOptionsDto.orden)
      .take(pageOptionsDto.cantidad_por_pagina)
      .skip((pageOptionsDto.pagina - 1) * pageOptionsDto.cantidad_por_pagina);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return {
      items: entities.map((item) => ({
        id: item.id,
        type: item.persona.type,
        nombre: item.persona.nombre,
        apellido: item.persona.apellido,
        fechaNaacimiento: item.fechaNacimiento,
        numero_expendiente: item.numeroExpendiente,
      })),
      meta: {
        total: itemCount,
        pagina: pageOptionsDto.pagina,
        cantidad_por_pagina: pageOptionsDto.cantidad_por_pagina,
      },
    };
  }

  async findById<Entity extends NamedThing>(
    where: FindOptionsWhere<Entity>,
    target: EntityTarget<Entity>,
    relations?: string[],
    throwError: boolean = true,
  ) {
    const element = await this.dataSource.manager
      .getRepository<Entity>(target)
      .findOne({
        where,
        relations,
      });
    if (!element && throwError) {
      throw new BadRequestException(`Elemento no encontrado`);
    }
    return element;
  }

  async create(item: PacienteCreateDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      await queryRunner.startTransaction();
      const persona = new Persona({
        apellido: item.apellido,
        nombre: item.nombre,
        type: 'PACIENT',
      });

      // asigando los documentos a la persona
      persona.documentos = item.documentos.map(
        (doc) =>
          new Documento({ numeroDocumento: doc.numero, tipo: { id: doc.id } }),
      );

      // asignando los contactos a la persona
      persona.contactos = item.contactos.map(
        (item) =>
          new Contacto({ numeroContacto: item.numero, tipo: { id: item.id } }),
      );

      await queryRunner.manager.save(persona);
      const codigo = await this.createNumeroExpendiente(queryRunner);

      const paciente = new Paciente();
      paciente.persona = persona;
      paciente.genero = { id: item.genero };
      paciente.municipio = { id: item.municipio };

      paciente.numeroExpendiente = codigo;
      paciente.direccion = item.direccion;
      paciente.fechaNacimiento = item.fecha_nacimiento;

      await queryRunner.manager.save(paciente);

      await queryRunner.commitTransaction();
      await queryRunner.release();
      return paciente;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw new BadRequestException(error.message);
    }
  }

  public async createNumeroExpendiente(runner: QueryRunner) {
    const item = await runner.manager.findOne(Configuracion, {
      where: { id: 1 },
    });

    const { valor } = item;
    const size = 5 - valor.length;
    const year = moment().format('YYYY');
    const zeroInitial = '0'.repeat(size <= 0 ? 0 : size);
    const numeroExpendiente = `${zeroInitial}${+valor}-${year}`;

    item.valor = (parseInt(valor) + 1).toString();
    await runner.manager.save(item);
    return numeroExpendiente;
  }

  // steps services
  async getStep(id: number, pacienteId: number) {
    let isNew = true;
    let idUpdated = 0;
    let notChecked = false;
    const step = await this.findById({ id }, Step, ['preguntas']);

    if (!step) {
      throw new BadRequestException('step not found');
    }

    const stepPaciente = await this.findById(
      { step: { id }, paciente: { id: pacienteId } },
      HistoricoPaciente,
      [],
      false,
    );

    if (stepPaciente) {
      isNew = false;
      idUpdated = stepPaciente.id;
      const { valor } = stepPaciente;
      const group = _.groupBy(valor, 'codigo');
      const keys = Object.keys(group);

      if (group && keys.length > 0 && !keys.includes('P27')) {
        const { preguntas, id } = step;
        step.preguntas = preguntas.map((pregunta) => {
          const { codigo, ...restQuestion } = pregunta;
          const exits = group[`${codigo}`];
          if (exits && exits.length > 0) {
            if ([2, 4].includes(+id)) {
              const [valueSave] = exits;
              return {
                ...pregunta,
                valor: '1',
                show: true,
                inputs: valueSave['inputs'],
              };
            }
            return {
              ...pregunta,
              valor: '1',
            };
          }
          return pregunta;
        });
      } else {
        notChecked = true;
      }
    }

    // asignado el valor de is_new
    step['is_new'] = isNew;
    step['idUpdated'] = idUpdated;
    step['not_posee'] = notChecked;
    return step;
  }

  async storeStep(step: StepCreateDto) {
    const {
      id,
      is_new: isNew,
      paciente_id: pacienteId,
      step_id: stepId,
      preguntas,
    } = step;

    if (!isNew && !id) {
      throw new BadRequestException(
        'id es necesario para poder actualizar el step',
      );
    }

    let message = '';
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();
      if (isNew) {
        const step = await this.findById({ id: stepId }, Step);
        const paciente = await this.findById({ id: pacienteId }, Paciente);

        const historico = new HistoricoPaciente();
        historico.step = step;
        historico.valor = preguntas;
        historico.paciente = paciente;
        await queryRunner.manager.save(historico);
        message = 'Datos guardados correctamente';
      } else {
        const historico = await this.findById({ id }, HistoricoPaciente);
        historico.valor = preguntas;
        await queryRunner.manager.save(historico);
        message = 'Datos actualizados correctamente';
      }
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return { message };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw new BadRequestException(error.message);
    }
  }
}
