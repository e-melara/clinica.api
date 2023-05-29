import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { HistoricoPaciente, StepPregunta } from './';

@Entity('mnt_historico_detalle_paciente')
export class HistoricoDetallePaciente {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'valor', type: 'json' })
  valor: JSON;

  @ManyToOne(() => HistoricoPaciente, (historico) => historico.detalles)
  @JoinColumn({ name: 'historico_paciente_id' })
  historico: HistoricoPaciente;

  @ManyToOne(() => StepPregunta, (stepPregunta) => stepPregunta.detalles)
  @JoinColumn({ name: 'step_pregunta_id' })
  stepPreguntas: StepPregunta[];
}
