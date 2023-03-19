import {
  Entity,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Paciente } from '.';
import { TipoContacto } from 'src/custom/entities';

@Entity('mnt_pacientes_contactos')
export class Contacto {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  id?: number;

  @Column({ name: 'numero_contacto', type: 'varchar', length: 50 })
  numeroContacto: string;

  @ManyToOne(() => Paciente, (paciente) => paciente.contactos)
  @JoinColumn({ name: 'paciente_id' })
  paciente?: Paciente;

  @ManyToOne(
    () => TipoContacto,
    (tipoContacto) => tipoContacto.contactoPaciente,
  )
  @JoinColumn({ name: 'tipo_contacto_id' })
  tipo: TipoContacto;
}
