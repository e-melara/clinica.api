import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Sexo,
  Telefono,
  Paciente,
  Documento,
  Municipio,
  Departamento,
  PacienteDocumento,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Paciente,
      Sexo,
      Municipio,
      Departamento,
      Documento,
      Telefono,
      PacienteDocumento,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class PacientesModule {}
