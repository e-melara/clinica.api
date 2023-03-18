import {
  Entity,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Persona } from 'src/auth/entities';
import { Sexo, Municipio, Telefono, PacienteDocumento } from './';

@Entity('mnt_pacientes')
export class Paciente {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fechaNacimiento: Date;
  @Column({ name: 'direccion', type: 'text' })
  direccion: string;
  @Column({ name: 'numero_expendiente', type: 'varchar', length: 20 })
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

  @OneToMany(() => Telefono, (telefono) => telefono.paciente)
  telefono: Telefono[];

  @OneToMany(
    () => PacienteDocumento,
    (pacienteDocumento) => pacienteDocumento.paciente,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
      cascade: true,
    },
  )
  pacienteDocumento: PacienteDocumento[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
