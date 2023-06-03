import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Step } from './';

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

  @ManyToMany(() => Step, (step) => step.preguntas, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  steps?: Step[];
}
