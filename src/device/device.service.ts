import IDevice from './interfaces/device.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from 'src/entity/device.entity';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private deviceRepository: Repository<Device>,
  ) {}

  async create(deviceDto: IDevice) {
    this.deviceRepository.insert({
      name: deviceDto.name,
      mac: deviceDto.mac,
      type: deviceDto.type,
      active: 0,
      ledCount: deviceDto.ledCount,
    });
  }

  async findOne(id): Promise<IDevice> {
    return await this.deviceRepository.findOneBy({ id: id });
  }

  async findAll(): Promise<IDevice[]> {
    return await this.deviceRepository.find();
  }
}
