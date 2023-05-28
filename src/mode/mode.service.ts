import IMode from './interfaces/Mode.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mode } from 'src/entity/Mode.entity';

@Injectable()
export class ModeService {
  constructor(
    @InjectRepository(Mode)
    private ModeRepository: Repository<Mode>,
  ) {}

  async findMode(deviceId: string): Promise<IMode> {
    return await this.ModeRepository.findOneBy({
      device: {
        id: +deviceId,
      },
    });
  }

  async updateMode(deviceId: string, dto: IMode): Promise<Array<string>> {
    await this.ModeRepository.update({ device: { id: +deviceId } }, { ...dto });

    return [];
  }

  async createMode(deviceId: string, dto: IMode): Promise<Array<string>> {
    await this.ModeRepository.insert({ ...dto });

    return [];
  }
}
