import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { Paciente } from 'src/pacientes/entities';

@Entity('ctl_generos')
export class Genero {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 20 })
  nombre: string;

  @OneToOne(() => Paciente, (paciente) => paciente.genero)
  paciente?: Paciente;
}
