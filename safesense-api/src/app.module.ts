import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [UserModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
