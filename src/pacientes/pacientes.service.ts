import * as moment from 'moment-timezone';
import { DataSource, QueryRunner } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

import { Paciente } from './entities';
import { PacienteCreateDto } from './dto/paciente-create.dto';
import { Persona, Configuracion, Documento, Contacto } from 'src/auth/entities';

@Injectable()
export class PacientesService {
  constructor(private readonly dataSource: DataSource) {}

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
}
