import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Rol } from './';

@Entity('ctl_modulos')
export class Modulo {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column('varchar', { length: 30 })
  nombre: string;

  @Column('varchar', { length: 50, unique: true })
  url: string;

  @Column('varchar', { length: 20 })
  icon: string;

  @Column({ type: 'varchar', length: 25 })
  name: string;

  @OneToMany(() => Rol, (rol) => rol.modulo)
  roles: Rol[];
}
