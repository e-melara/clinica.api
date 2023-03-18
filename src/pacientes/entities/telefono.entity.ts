import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Paciente } from './paciente.entity';

@Entity('mnt_paciente_telefono')
export class Telefono {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'numero', type: 'varchar', length: 15 })
  numero: string;

  @ManyToOne(() => Paciente, (paciente) => paciente.telefono)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;
}
