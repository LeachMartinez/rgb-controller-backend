import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import IDevice from '../device/interfaces/device.interface';
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
}
