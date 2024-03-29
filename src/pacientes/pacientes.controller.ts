import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';

import { StepCreateDto } from './dto/step.dto';
import { PacientesService } from './pacientes.service';
import { PageOptionsDto } from './dto/page-options.dto';
import { PacienteCreateDto } from './dto/paciente-create.dto';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly service: PacientesService) {}

  @Post()
  @Auth(['ROL_PATIENTS_ADD'])
  async create(@Body() paciente: PacienteCreateDto) {
    return this.service.create(paciente);
  }

  @Put('/:id')
  @Auth([])
  async update(
    @Body() paciente: PacienteCreateDto,
    @Param('id') id: number,
  ) {
    return this.service.update(paciente, id)
  }

  @Get()
  @Auth([])
  async getAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.service.findAll(pageOptionsDto);
  }

  @Get('/:id')
  @Auth([])
  async getFindOne(@Param('id') id: number) {
    return this.service.getFindOne(id);
  }

  @Get('step/:id/:paciente_id')
  @Auth(['ROL_PATIENTS_ADD'])
  async getStep(
    @Param('id') id: number,
    @Param('paciente_id') pacienteId: number,
  ) {
    return await this.service.getStep(id, pacienteId);
  }

  @Post('step')
  @Auth(['ROL_PATIENTS_ADD'])
  async storeStep(@Body() step: StepCreateDto) {
    return await this.service.storeStep(step);
  }
}
