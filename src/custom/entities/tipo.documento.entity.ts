import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Documento as DocumentoPaciente } from 'src/pacientes/entities';

@Entity('ctl_tipo_documento')
export class TipoDocumento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 35 })
  nombre: string;

  @OneToMany(() => DocumentoPaciente, (documento) => documento.tipo)
  documentoPaciente?: DocumentoPaciente;
}
