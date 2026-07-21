import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateKenaikanPangkatDto } from './dto/create-kenaikan-pangkat.dto';
import { UpdateKenaikanPangkatDto } from './dto/update-kenaikan-pangkat.dto';

@Injectable()
export class KenaikanPangkatService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.kenaikanPangkat.findMany({
      include: {
        pegawai: true,
      },
      orderBy: {
        tmtKenaikan: 'asc',
      },
    });
  }

  async create(createDto: CreateKenaikanPangkatDto) {
    return this.prisma.kenaikanPangkat.create({
      data: createDto,
    });
  }

  async findOne(id: number) {
    const data = await this.prisma.kenaikanPangkat.findUnique({
      where: { id },
      include: {
        pegawai: true,
      },
    });

    if (!data) {
      throw new NotFoundException(
        `Kenaikan Pangkat dengan ID ${id} tidak ditemukan`,
      );
    }

    return data;
  }

  async update(
    id: number,
    updateDto: UpdateKenaikanPangkatDto,
  ) {
    return this.prisma.kenaikanPangkat.update({
      where: { id },
      data: updateDto,
    });
  }

  async remove(id: number) {
    return this.prisma.kenaikanPangkat.delete({
      where: { id },
    });
  }
}