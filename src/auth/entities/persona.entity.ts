import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { TypePersonEnum } from '../interfaces';
import { Usuario, Documento, Contacto } from './';
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

  @Column({
    type: 'enum',
    enum: TypePersonEnum,
    default: TypePersonEnum.PACIENT,
  })
  type: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.perfils, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  usuarios: Usuario[];

  @OneToMany(() => Contacto, (contacto) => contacto.persona, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    cascade: true,
  })
  contactos: Contacto[];

  @OneToMany(() => Documento, (documento) => documento.persona, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    cascade: true,
  })
  documentos: Documento[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
