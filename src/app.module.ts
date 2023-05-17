import { Module } from '@nestjs/common';
import { DeviceController } from './device/device.controller';
import { DeviceService } from './device/device.service';

@Module({
  imports: [],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class AppModule {}
