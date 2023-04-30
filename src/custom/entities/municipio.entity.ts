import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Departamento } from './';
import { Paciente } from 'src/pacientes/entities';

@Entity('ctl_municipios')
export class Municipio {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 50 })
  nombre?: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.municipio)
  @JoinColumn({ name: 'departamento_id' })
  departamento?: Departamento;

  @OneToMany(() => Paciente, (paciente) => paciente.genero)
  paciente?: Paciente;
}
