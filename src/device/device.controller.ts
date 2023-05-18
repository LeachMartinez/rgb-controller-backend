import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DeviceDto } from './dto/device.dto';
import { DeviceService } from './device.service';
import IDevice from './interfaces/device.interface';
@Controller()
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get('device')
  async findAll(): Promise<IDevice[]> {
    return this.deviceService.findAll();
  }

  @Get('device/:id')
  async findOne(@Param('id') id: string) {
    return this.deviceService.findOne(id);
  }

  @Post('createDevice')
  async createOne(@Body() deviceDto: DeviceDto) {
    this.deviceService.create(deviceDto);
  }
}
