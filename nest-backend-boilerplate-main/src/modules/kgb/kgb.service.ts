import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateKgbDto } from './dto/create-kgb.dto';
import { UpdateKgbDto } from './dto/update-kgb.dto';

@Injectable()
export class KgbService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.kgb.findMany({
      include: {
        pegawai: true,
      },
    });
  }

  async findOne(id: number) {
    const kgb = await this.prisma.kgb.findUnique({
      where: { id },
      include: {
        pegawai: true,
      },
    });

    if (!kgb) {
      throw new NotFoundException(`KGB dengan ID ${id} tidak ditemukan`);
    }

    return kgb;
  }

  async create(createKgbDto: CreateKgbDto) {
    return this.prisma.kgb.create({
      data: createKgbDto,
    });
  }

  async update(id: number, updateKgbDto: UpdateKgbDto) {
    await this.findOne(id);

    return this.prisma.kgb.update({
      where: { id },
      data: updateKgbDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.kgb.delete({
      where: { id },
    });
  }
}