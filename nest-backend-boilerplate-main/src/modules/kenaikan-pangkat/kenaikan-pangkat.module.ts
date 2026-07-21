import { Module } from '@nestjs/common';
import { KenaikanPangkatController } from './kenaikan-pangkat.controller';
import { KenaikanPangkatService } from './kenaikan-pangkat.service';

@Module({
  controllers: [KenaikanPangkatController],
  providers: [KenaikanPangkatService],
})
export class KenaikanPangkatModule {}