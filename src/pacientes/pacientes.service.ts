import * as moment from 'moment-timezone';
import { DataSource, QueryRunner } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

import {
  Genero,
  Municipio,
  TipoContacto,
  TipoDocumento,
} from 'src/custom/entities';
import { Persona, Configuracion } from 'src/auth/entities';
import { Contacto, Documento, Paciente } from './entities';
import { PacienteCreateDto } from './dto/paciente-create.dto';

@Injectable()
export class PacientesService {
  constructor(private readonly dataSource: DataSource) {}

  async create(item: PacienteCreateDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      await queryRunner.startTransaction();
      const municipio = await queryRunner.manager.findOne(Municipio, {
        where: { id: item.municipio },
      });

      const genero = await queryRunner.manager.findOne(Genero, {
        where: { id: item.genero },
      });

      const persona = new Persona({
        apellido: item.apellido,
        nombre: item.nombre,
      });
      await queryRunner.manager.save(persona);
      const codigo = await this.createNumeroExpendiente(queryRunner);

      const paciente = new Paciente();
      paciente.genero = genero;
      paciente.persona = persona;
      paciente.municipio = municipio;

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
    console.log({
      valor,
      size,
      year,
      zeroInitial,
      numeroExpendiente,
    });

    item.valor = (parseInt(valor) + 1).toString();
    await runner.manager.save(item);
    return numeroExpendiente;
  }
}
