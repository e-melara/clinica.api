import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Paciente, Pregunta, Step, HistoricoPaciente } from './entities';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Paciente, Pregunta, Step, HistoricoPaciente]),
  ],
  exports: [TypeOrmModule],
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
