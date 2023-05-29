import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Step, Pregunta, HistoricoDetallePaciente } from './';

@Entity('ctl_steps_preguntas')
export class StepPregunta {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'step_id', type: 'bigint', unsigned: true })
  stepId: number;

  @Column({ name: 'pregunta_id', type: 'bigint', unsigned: true })
  preguntaId: number;

  @ManyToOne(() => Step, (step) => step.stepPreguntas)
  @JoinColumn({ name: 'step_id', referencedColumnName: 'id' })
  steps: Step[];

  @ManyToOne(() => Pregunta, (pregunta) => pregunta.preguntas)
  @JoinColumn({ name: 'pregunta_id', referencedColumnName: 'id' })
  preguntas: Pregunta[];

  @OneToMany(() => HistoricoDetallePaciente, (detalle) => detalle.stepPreguntas)
  detalles: HistoricoDetallePaciente[];
}
