import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { StepPregunta, HistoricoPaciente } from './';

@Entity('ctl_steps')
export class Step {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 50 })
  nombre: String;

  @OneToMany(() => StepPregunta, (stepPregunta) => stepPregunta.steps)
  stepPreguntas: StepPregunta[];

  @OneToMany(() => HistoricoPaciente, (historico) => historico.step)
  historicos: HistoricoPaciente[];
}
