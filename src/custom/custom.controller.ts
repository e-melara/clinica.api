import { Controller, Get } from '@nestjs/common';
import { CustomService } from './custom.service';

@Controller('customs')
export class CustomController {
  constructor(private readonly service: CustomService) {}

  @Get('/departamentos')
  async departamentos() {
    return await this.service.getDepartamentos();
  }

  @Get('/departamentos/:id')
  async departamento(id: number) {
    return await this.service.getDepartamento(id);
  }

  @Get('/municipio/:id')
  async municipio(id: number) {
    return await this.service.getMunicipio(id);
  }

  @Get('/generos')
  async generos() {
    return await this.service.getGeneros();
  }

  @Get('/generos/:id')
  async genero(id: number) {
    return await this.service.getGenero(id);
  }

  @Get('/documentos')
  async documentos() {
    return await this.service.getTipoDocumentos();
  }

  @Get('/documentos/:id')
  async documento(id: number) {
    return await this.service.getTipoDocumento(id);
  }

  @Get('/contactos')
  async contactos() {
    return await this.service.getTipoContactos();
  }

  @Get('/contactos/:id')
  async contacto(id: number) {
    return await this.service.getTipoContacto(id);
  }
}
