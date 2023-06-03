import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';

import { PacienteCreateDto } from './dto/paciente-create.dto';
import { PacientesService } from './pacientes.service';
import { PageOptionsDto } from './dto/page-options.dto';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly service: PacientesService) {}

  @Post()
  @Auth(['ROL_PATIENTS_ADD'])
  async create(@Body() paciente: PacienteCreateDto) {
    return this.service.create(paciente);
  }

  @Get()
  @Auth([])
  async getAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.service.findAll(pageOptionsDto);
  }

  @Get('step/:id/:paciente_id')
  async getStep(
    @Param('id') id: number,
    @Param('paciente_id') pacienteId: number,
  ) {
    return await this.service.getStep(id, pacienteId);
  }
}