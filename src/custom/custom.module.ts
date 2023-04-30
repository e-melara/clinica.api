import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Departamento,
  Genero,
  Municipio,
  TipoDocumento,
  TipoContacto,
} from './entities';
import { CustomController } from './custom.controller';
import { CustomService } from './custom.service';

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
  controllers: [CustomController],
  providers: [CustomService],
})
export class CustomModule {}
