import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Departamento, Paciente } from './';

@Entity('ctl_municipios')
export class Municipio {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 50 })
  nombre: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.municipio)
  @JoinColumn({ name: 'departamento_id' })
  departamento: Departamento;

  @OneToOne(() => Paciente, (paciente) => paciente.municipio)
  paciente: Paciente;
}
