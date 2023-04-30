import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mnt_configuracion')
export class Configuracion {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column('varchar', { length: 20 })
  nombre: string;

  @Column('varchar', { length: 30 })
  valor: string;
}
