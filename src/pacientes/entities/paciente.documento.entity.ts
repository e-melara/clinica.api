import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Paciente, Documento } from './';

@Entity('mnt_pacientes_documentos')
export class PacienteDocumento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id: number;

  @Column({ name: 'numero_documento', type: 'varchar', length: 25 })
  numeroDocumento: string;

  @ManyToOne(() => Paciente, (paciente) => paciente.pacienteDocumento)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;

  @ManyToOne(() => Documento, (documento) => documento.pacienteDocumento)
  @JoinColumn({ name: 'documento_id' })
  documento: Documento;
}
