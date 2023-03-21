import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Persona } from '.';
import { TipoContacto } from 'src/custom/entities';

@Entity('mnt_personas_contactos')
export class Contacto {
  constructor(partial: Partial<Contacto>) {
    Object.assign(this, partial);
  }
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id?: number;

  @Column({ name: 'numero_contacto', type: 'varchar', length: 50 })
  numeroContacto: string;

  @ManyToOne(() => Persona, (persona) => persona.contactos)
  @JoinColumn({ name: 'persona_id' })
  persona?: Persona;

  @ManyToOne(() => TipoContacto, (tipoContacto) => tipoContacto.contactoPersona)
  @JoinColumn({ name: 'tipo_contacto_id' })
  tipo: TipoContacto;
}
