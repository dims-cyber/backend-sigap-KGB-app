import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { KenaikanPangkatService } from './kenaikan-pangkat.service';
import { CreateKenaikanPangkatDto } from './dto/create-kenaikan-pangkat.dto';
import { UpdateKenaikanPangkatDto } from './dto/update-kenaikan-pangkat.dto';

@Controller('kenaikan-pangkat')
export class KenaikanPangkatController {
  constructor(
    private readonly kenaikanPangkatService: KenaikanPangkatService,
  ) {}

  @Post()
  create(@Body() createDto: CreateKenaikanPangkatDto) {
    return this.kenaikanPangkatService.create(createDto);
  }

  @Get()
  findAll() {
    return this.kenaikanPangkatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.kenaikanPangkatService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateKenaikanPangkatDto,
  ) {
    return this.kenaikanPangkatService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.kenaikanPangkatService.remove(id);
  }
}