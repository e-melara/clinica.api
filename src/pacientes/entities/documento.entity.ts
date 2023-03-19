import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Paciente } from '.';
import { TipoDocumento } from 'src/custom/entities';

@Entity('mnt_pacientes_documentos')
export class Documento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'numero_documento', type: 'varchar', length: 25 })
  numeroDocumento: string;

  @ManyToOne(() => Paciente, (paciente) => paciente.contactos)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;

  @ManyToOne(() => TipoDocumento, (tipoDocumento) => tipoDocumento)
  @JoinColumn({ name: 'documento_id' })
  tipo: Documento;
}
