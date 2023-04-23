import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
}
