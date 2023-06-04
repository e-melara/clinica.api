import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Column,
} from 'typeorm';

import { Step, Paciente } from './';

@Entity('mnt_historico_paciente')
export class HistoricoPaciente {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @ManyToOne(() => Paciente, (paciente) => paciente.historicos)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;

  @ManyToOne(() => Step, (step) => step.historicos)
  @JoinColumn({ name: 'step_id' })
  step: Step;

  @Column({
    name: 'valor',
    type: 'json',
    nullable: true,
  })
  valor: object[];
}
