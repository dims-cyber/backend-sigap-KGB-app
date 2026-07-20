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
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';

@Controller('pegawai')
export class PegawaiController {
    constructor(private readonly pegawaiService: PegawaiService) {}

    @Get()
    findAll(){
        return this.pegawaiService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.pegawaiService.findOne(id);
    }

    @Post()
    create(@Body() createPegawaiDto: CreatePegawaiDto) {
        return this.pegawaiService.create(createPegawaiDto);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePegawaiDto: UpdatePegawaiDto
    ) {
        return this.pegawaiService.update(id, updatePegawaiDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.pegawaiService.remove(id);
    }
}