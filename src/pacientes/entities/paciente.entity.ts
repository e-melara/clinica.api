import {
  Entity,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Contacto, Documento } from '.';
import { Persona } from 'src/auth/entities';
import { Genero, Municipio } from 'src/custom/entities';

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

  @ManyToOne(() => Genero, (genero) => genero.paciente)
  @JoinColumn({ name: 'genero_id' })
  genero: Genero;

  @OneToOne(() => Persona, (persona) => persona.paciente)
  @JoinColumn({ name: 'persona_id' })
  persona: Persona;

  @ManyToOne(() => Municipio, (municipio) => municipio.paciente)
  @JoinColumn({ name: 'municipio_id' })
  municipio: Municipio;

  @OneToMany(() => Contacto, (contacto) => contacto.paciente, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    cascade: true,
    eager: true,
  })
  contactos: Contacto[];

  @OneToMany(() => Documento, (documento) => documento.paciente, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    cascade: true,
    eager: true,
  })
  documentos: Documento[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
