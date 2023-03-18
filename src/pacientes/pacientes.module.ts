import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Departamento, Municipio, Paciente, Sexo } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paciente, Sexo, Municipio, Departamento]),
  ],
  exports: [TypeOrmModule],
})
export class PacientesModule {}
