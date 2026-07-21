import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

import { KgbService } from './kgb.service';
import { CreateKgbDto } from './dto/create-kgb.dto';
import { UpdateKgbDto } from './dto/update-kgb.dto';

@Controller('kgb')
export class KgbController {
  constructor(private readonly kgbService: KgbService) {}

  @Get()
  findAll() {
    return this.kgbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.kgbService.findOne(id);
  }

  @Post()
  create(@Body() createKgbDto: CreateKgbDto) {
    return this.kgbService.create(createKgbDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKgbDto: UpdateKgbDto,
  ) {
    return this.kgbService.update(id, updateKgbDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.kgbService.remove(id);
  }
}