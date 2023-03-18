import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { Municipio } from './';

@Entity('ctl_departamentos')
export class Departamento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 30 })
  nombre: string;

  @OneToOne(() => Municipio, (municipio) => municipio.departamento)
  municipio: Municipio;
}
