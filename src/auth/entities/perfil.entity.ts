import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Usuario, Rol } from '.';

@Entity('ctl_perfils')
export class Perfil {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column('varchar', { length: 30 })
  nombre: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.perfils, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  usuario: Usuario[];

  @ManyToMany(() => Rol, (rol) => rol.perfils, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'ctl_perfiles_roles',
    joinColumn: {
      name: 'perfil_id',
    },
    inverseJoinColumn: {
      name: 'rol_id',
    },
  })
  roles: Rol[];
}
