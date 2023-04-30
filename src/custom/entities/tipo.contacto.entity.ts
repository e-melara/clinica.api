import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Contacto as ContactoPersona } from 'src/auth/entities';

@Entity('ctl_tipo_contacto')
export class TipoContacto {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 35 })
  nombre?: string;

  @OneToMany(() => ContactoPersona, (contacto) => contacto.tipo)
  contactoPersona?: ContactoPersona;
}
