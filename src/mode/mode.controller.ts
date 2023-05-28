import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ModeDto } from './dto/mode.dto';
import { ModeService } from './mode.service';
import IMode from './interfaces/mode.interface';
@Controller()
export class DeviceController {
  constructor(private modeService: ModeService) {}

  @Post('mode/:deviceId')
  updateMode(@Param('deviceId') deviceId: string, @Body() modeDto: ModeDto) {
    const mode = this.modeService.findMode(deviceId);
    mode
      ? this.modeService.updateMode(deviceId, modeDto)
      : this.modeService.createMode(deviceId, modeDto);
  }
}
