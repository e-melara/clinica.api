import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Usuario } from './usuario.entity';
import { Paciente } from 'src/pacientes/entities';

@Entity('mnt_personas')
export class Persona {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  constructor(partial: Partial<Persona>) {
    Object.assign(this, partial);
  }

  @Column('varchar', { length: 30 })
  nombre: string;

  @Column('varchar', { length: 30 })
  apellido: string;

  @OneToOne(() => Usuario, (usuario) => usuario.persona)
  usuario: Usuario;

  @OneToOne(() => Paciente, (paciente) => paciente.persona)
  paciente: Paciente;

  @ManyToMany(() => Usuario, (usuario) => usuario.perfils, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  usuarios: Usuario[];
}
