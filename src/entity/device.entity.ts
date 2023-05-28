import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import IDevice from '../device/interfaces/device.interface';

import { Mode } from './mode.entity';
@Entity()
export class Device implements IDevice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mac: string;

  @Column({ default: 0 })
  active: 0 | 1;

  @Column({ default: 'deviceStrip' })
  type: string;

  @Column()
  ledCount: number;

  @OneToOne(() => Mode, (mode) => mode.device)
  @JoinColumn()
  mode: Mode;
}
