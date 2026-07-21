import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

   async findAll() {
    const totalPegawai = await this.prisma.pegawai.count();
    const totalKgb = await this.prisma.kgb.count();

    const today = new Date();
    const batas6Bulan = new Date(today);
    batas6Bulan.setMonth(today.getMonth() + 6);

    // Batas 30 hari ke depan
    const batas30Hari = new Date(today);
    batas30Hari.setDate(today.getDate() + 30);

    // KGB dalam 30 hari
    const listKgb30Hari = await this.prisma.kgb.findMany({
      where: {
        tmtBerikutnya: {
          gte: today,
          lte: batas30Hari,
        },
      },
      include: {
        pegawai: true,
      },
    });

    const listPensiun6Bulan = await this.prisma.pensiun.findMany({
  where: {
    tanggalPensiun: {
      gte: today,
      lte: batas6Bulan,
    },
  },
  include: {
    pegawai: true,
  },
});

    const statusSudah = await this.prisma.kgb.count({
  where: {
    tmtBerikutnya: {
      lt: today,
    },
  },
});

const statusSegera = await this.prisma.kgb.count({
  where: {
    tmtBerikutnya: {
      gte: today,
      lte: batas30Hari,
    },
  },
});

const statusNormal = await this.prisma.kgb.count({
  where: {
    tmtBerikutnya: {
      gt: batas30Hari,
    },
  },
});

    // KGB yang sudah lewat
    const listKgbSudah = await this.prisma.kgb.findMany({
      where: {
        tmtBerikutnya: {
          lt: today,
        },
      },
      include: {
        pegawai: true,
      },
    });

    return {
      totalPegawai,
      totalKgb,

      kgb30Hari: listKgb30Hari.length,
      kgbSudah: listKgbSudah.length,

      statistik:{
        sudah: statusSudah,
        segera: statusSegera,
        normal: statusNormal,
      },
      pensiun6Bulan: listPensiun6Bulan.length,
      listPensiun6Bulan,
      listKgb30Hari,
      listKgbSudah,
    };
  }
}