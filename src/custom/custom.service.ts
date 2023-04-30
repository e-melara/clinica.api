import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

import {
  Departamento,
  Municipio,
  Genero,
  TipoContacto,
  TipoDocumento,
} from './entities';

@Injectable()
export class CustomService {
  constructor(private readonly dataSource: DataSource) {}

  async getDepartamentos() {
    return await this.dataSource.manager.getRepository(Departamento).find();
  }

  async getDepartamento(id: number) {
    console.log({ id });
    const repository = this.dataSource.manager.getRepository(Departamento);
    return await repository.findOne({
      where: {
        id,
      },
      relations: {
        municipio: true,
      },
    });
  }

  async getMunicipio(id: number) {
    const repository = this.dataSource.manager.getRepository(Municipio);
    return await repository.findOne({
      where: {
        id,
      },
      relations: {
        departamento: true,
      },
    });
  }

  async getTipoContactos() {
    return await this.dataSource.manager.getRepository(TipoContacto).find();
  }

  async getTipoContacto(id: number) {
    return await this.dataSource.manager.getRepository(TipoContacto).findOne({
      where: { id },
    });
  }

  async getGeneros() {
    return await this.dataSource.manager.getRepository(Genero).find();
  }

  async getGenero(id: number) {
    return await this.dataSource.manager.getRepository(Genero).findOne({
      where: { id },
    });
  }

  async getTipoDocumentos() {
    return await this.dataSource.manager.getRepository(TipoDocumento).find();
  }

  async getTipoDocumento(id: number) {
    return await this.dataSource.manager.getRepository(TipoDocumento).findOne({
      where: { id },
    });
  }
}
