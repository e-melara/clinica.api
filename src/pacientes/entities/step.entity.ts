import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { HistoricoPaciente, Pregunta } from './';

@Entity('ctl_steps')
export class Step {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', length: 50 })
  nombre: String;

  @OneToMany(() => HistoricoPaciente, (historico) => historico.step)
  historicos: HistoricoPaciente[];

  @ManyToMany(() => Pregunta, (pregunta) => pregunta.steps, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'ctl_steps_preguntas',
    joinColumn: {
      name: 'step_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'pregunta_id',
      referencedColumnName: 'id',
    },
  })
  preguntas?: Pregunta[];
}
