import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { Paciente } from './';

@Entity('ctl_sexos')
export class Sexo {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 5 })
  nombre: string;

  @OneToOne(() => Paciente, (paciente) => paciente.sexo)
  paciente: Paciente;
}
