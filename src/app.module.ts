import { Module } from '@nestjs/common';
import { DeviceController } from './device/device.controller';
import { DeviceService } from './device/device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from './entity/device.entity';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'rgb_controller_dev',
      entities: [Device],
      synchronize: true,
    }),
    DeviceModule,
  ],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class AppModule {}
