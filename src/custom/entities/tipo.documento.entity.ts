import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Documento as DocumentoPersona } from 'src/auth/entities';

@Entity('ctl_tipo_documento')
export class TipoDocumento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 35 })
  nombre: string;

  @OneToMany(() => DocumentoPersona, (documento) => documento.tipo)
  documentoPersona?: DocumentoPersona;
}
