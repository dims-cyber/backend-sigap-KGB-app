import { Module } from '@nestjs/common';
import { KgbController } from './kgb.controller';
import { KgbService } from './kgb.service';

@Module({
  controllers: [KgbController],
  providers: [KgbService]
})
export class KgbModule {}
