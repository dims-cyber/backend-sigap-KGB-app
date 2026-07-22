import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const totalPegawai = await this.prisma.pegawai.count();
    const totalKgb = await this.prisma.kgb.count();
    const totalKenaikanPangkat =
      await this.prisma.kenaikanPangkat.count();

    const today = new Date();

    // Batas 30 hari
    const batas30Hari = new Date(today);
    batas30Hari.setDate(today.getDate() + 30);

    // Batas 6 bulan
    const batas6Bulan = new Date(today);
    batas6Bulan.setMonth(today.getMonth() + 6);

    // ==========================
    // KGB 30 Hari
    // ==========================
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

    // ==========================
    // KGB Sudah Lewat
    // ==========================
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

    // ==========================
    // Statistik KGB
    // ==========================
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

    // ==========================
    // Kenaikan Pangkat 30 Hari
    // ==========================
    const listKenaikanPangkat30Hari =
      await this.prisma.kenaikanPangkat.findMany({
        where: {
          tmtKenaikan: {
            gte: today,
            lte: batas30Hari,
          },
        },
        include: {
          pegawai: true,
        },
        orderBy: {
          tmtKenaikan: 'asc',
        },
      });

      const listKenaikanPangkatSudah =
      await this.prisma.kenaikanPangkat.findMany({
        where: {
          tmtKenaikan: {
        lt: today,
      },
    },
    include: {
      pegawai: true,
    },
    orderBy: {
      tmtKenaikan: 'desc',
    },
  });

    const kenaikanSudah =
      await this.prisma.kenaikanPangkat.count({
        where: {
          tmtKenaikan: {
            lt: today,
          },
        },
      });

    const kenaikanSegera =
      await this.prisma.kenaikanPangkat.count({
        where: {
          tmtKenaikan: {
            gte: today,
            lte: batas30Hari,
          },
        },
      });

    const kenaikanNormal =
      await this.prisma.kenaikanPangkat.count({
        where: {
          tmtKenaikan: {
            gt: batas30Hari,
          },
        },
      });

    const listPensiun6Bulan =
      await this.prisma.pensiun.findMany({
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

    return {
      totalPegawai,
      totalKgb,
      totalKenaikanPangkat,

      kgb30Hari: listKgb30Hari.length,
      kgbSudah: listKgbSudah.length,

      kenaikanPangkat30Hari: listKenaikanPangkat30Hari.length,
      kenaikanPangkatSudah: listKenaikanPangkatSudah.length,

      statistik: {
        kgb: {
          sudah: statusSudah,
          segera: statusSegera,
          normal: statusNormal,
        },

        kenaikanPangkat: {
          sudah: kenaikanSudah,
          segera: kenaikanSegera,
          normal: kenaikanNormal,
        },
      },

      pensiun6Bulan: listPensiun6Bulan.length,

      listPensiun6Bulan,
      listKgb30Hari,
      listKgbSudah,
      listKenaikanPangkat30Hari,
      listKenaikanPangkatSudah,
    };
  }
}