import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';

import { PacienteCreateDto } from './dto/paciente-create.dto';
import { PacientesService } from './pacientes.service';

@Controller('pacientes')
export class PacientesController {
  constructor(private readonly service: PacientesService) {}

  @Post()
  @Auth(['ROL_PATIENTS_ADD'])
  async create(@Body() paciente: PacienteCreateDto) {
    return this.service.create(paciente);
  }
}
