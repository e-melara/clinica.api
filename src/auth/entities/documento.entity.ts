import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Persona } from '.';
import { TipoDocumento } from 'src/custom/entities';

@Entity('mnt_personas_documentos')
export class Documento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'numero_documento', type: 'varchar', length: 25 })
  numeroDocumento: string;

  @ManyToOne(() => Persona, (persona) => persona.contactos)
  @JoinColumn({ name: 'persona_id' })
  persona: Persona;

  @ManyToOne(
    () => TipoDocumento,
    (tipoDocumento) => tipoDocumento.documentoPersona,
  )
  @JoinColumn({ name: 'documento_id' })
  tipo: Documento;
}
