import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import IMode from '../mode/interfaces/Mode.interface';

import { Device } from './device.entity';

@Entity()
export class Mode implements IMode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mode: string;

  @Column()
  color: string;

  @Column()
  timeStap: number;

  @Column()
  brightness: number;

  @OneToOne(() => Device, (device) => device.mode)
  @JoinColumn()
  device: Device;
}
