import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Paciente } from './entities';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente])],
  exports: [TypeOrmModule],
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
