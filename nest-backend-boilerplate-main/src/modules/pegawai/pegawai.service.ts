import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../core/prisma/prisma.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';

@Injectable()
export class PegawaiService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.pegawai.findMany({
      orderBy: {
        nama: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const pegawai = await this.prisma.pegawai.findUnique({
      where: { id },
    });

    if (!pegawai) {
      throw new NotFoundException('Pegawai tidak ditemukan');
    }

    return pegawai;
  }

  async create(createPegawaiDto: CreatePegawaiDto) {
    return this.prisma.pegawai.create({
      data: createPegawaiDto,
    });
  }

  async update(id: number, updatePegawaiDto: UpdatePegawaiDto) {
    await this.findOne(id);

    return this.prisma.pegawai.update({
      where: { id },
      data: updatePegawaiDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.pegawai.delete({
      where: { id },
    });
  }
}