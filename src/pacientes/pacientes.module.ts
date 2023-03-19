import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Paciente, Documento, Contacto } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente, Documento, Contacto])],
  exports: [TypeOrmModule],
})
export class PacientesModule {}
