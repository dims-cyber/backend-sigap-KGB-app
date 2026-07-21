import { Controller, Get } from '@nestjs/common';
import { KenaikanPangkatService } from './kenaikan-pangkat.service';

@Controller('kenaikan-pangkat')
export class KenaikanPangkatController {
  constructor(
    private readonly kenaikanPangkatService: KenaikanPangkatService,
  ) {}

  @Get()
  findAll() {
    return this.kenaikanPangkatService.findAll();
  }
}