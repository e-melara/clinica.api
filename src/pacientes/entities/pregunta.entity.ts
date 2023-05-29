import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StepPregunta } from './step.pregunta.entity';

@Entity('ctl_preguntas')
export class Pregunta {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'nombre_pregunta', type: 'varchar', length: 100 })
  nombrePregunta: String;

  @Column({ name: 'codigo', type: 'varchar', length: 10 })
  codigo: String;

  @Column({ name: 'valor', type: 'varchar', length: 5 })
  valor: String;

  @OneToMany(() => StepPregunta, (step) => step.preguntas)
  preguntas: StepPregunta[];
}
