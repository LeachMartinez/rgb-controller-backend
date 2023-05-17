import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DeviceDto } from './dto/device.dto';
import { DeviceService } from './device.service';

@Controller()
export class DeviceController {
  constructor(private deviceService: DeviceService) {}
  @Get('device')
  async findAll() {
    this.deviceService.getAll();
    return;
  }

  @Get('device/:id')
  async findOne(@Param('id') id: string) {
    this.deviceService.findOne(id);
    return;
  }

  @Post('createDevice')
  async createOne(@Body() deviceDto: DeviceDto) {
    this.deviceService.create(deviceDto);
  }
}
