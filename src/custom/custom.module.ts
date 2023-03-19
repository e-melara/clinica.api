import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Departamento,
  Genero,
  Municipio,
  TipoDocumento,
  TipoContacto,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TipoDocumento,
      Genero,
      Municipio,
      Departamento,
      TipoContacto,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class CustomModule {}
