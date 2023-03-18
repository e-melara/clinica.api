import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PacienteDocumento } from './paciente.documento.entity';

@Entity('ctl_tipo_documento')
export class Documento {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 30 })
  nombre: string;

  @OneToMany(
    () => PacienteDocumento,
    (pacienteDocumento) => pacienteDocumento.documento,
  )
  pacienteDocumento: PacienteDocumento;
}
