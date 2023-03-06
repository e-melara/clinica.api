import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

import { Perfil, Persona } from './';

@Entity('mnt_usuarios')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  constructor(partial: Partial<Usuario>) {
    Object.assign(this, partial);
  }

  @Column('varchar', { length: 30, unique: true })
  usuario: string;

  @Column('text')
  password: string;

  @OneToOne(() => Persona, (persona) => persona.usuario)
  @JoinColumn({ name: 'persona_id' })
  persona: Persona;

  @ManyToMany(() => Perfil, (perfil) => perfil.usuario, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'mnt_usuario_perfils',
    joinColumn: {
      name: 'usuario_id',
    },
    inverseJoinColumn: {
      name: 'perfil_id',
    },
  })
  perfils: Perfil[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
