import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Paciente, Documento, Contacto } from './entities';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente, Documento, Contacto])],
  exports: [TypeOrmModule],
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
