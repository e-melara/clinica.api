import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Modulo, Perfil } from './';

@Entity('ctl_roles')
export class Rol {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column('varchar', { length: 30 })
  nombre: string;

  @ManyToOne(() => Modulo, (modulo) => modulo.roles)
  @JoinColumn({ name: 'modulo_id' })
  modulo: Modulo;

  @ManyToMany(() => Perfil, (perfil) => perfil.roles, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  perfils: Perfil[];
}
