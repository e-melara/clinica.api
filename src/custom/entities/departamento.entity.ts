import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Municipio } from '.';

@Entity('ctl_departamentos')
export class Departamento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 40 })
  nombre: string;

  @OneToMany(() => Municipio, (municipio) => municipio.departamento)
  municipio: Municipio;
}
