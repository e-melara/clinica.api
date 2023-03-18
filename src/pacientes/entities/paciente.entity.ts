import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Sexo, Municipio } from './';
import { Persona } from 'src/auth/entities';

@Entity('mnt_pacientes')
export class Paciente {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fechaNacimiento: Date;
  @Column({ name: 'direccion', type: 'text' })
  direccion: string;
  @Column({ name: 'numero_expendiente', type: 'varchar' })
  numeroExpendiente: string;

  @OneToOne(() => Sexo, (sexo) => sexo.paciente)
  @JoinColumn({ name: 'sexo_id' })
  sexo: number;

  @OneToOne(() => Persona, (persona) => persona.paciente)
  @JoinColumn({ name: 'persona_id' })
  persona: Persona;

  @OneToOne(() => Municipio, (municipio) => municipio.paciente)
  @JoinColumn({ name: 'municipio_id' })
  municipio: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
