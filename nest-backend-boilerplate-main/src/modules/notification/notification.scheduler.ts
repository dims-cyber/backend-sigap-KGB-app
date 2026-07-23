import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DashboardService } from '../dashboard/dashboard.service';
import { NotificationService } from './notification.service';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class NotificationScheduler {
  private readonly logger = new Logger(NotificationScheduler.name);

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly notificationService: NotificationService,
    private readonly prismaService: PrismaService,
  ) {}

  private async processNotification({
    pegawaiId,
    referenceId,
    referenceField,
    jenis,
    nama,
    email,
    sendEmail,
  }: {
    pegawaiId: number;
    referenceId: number;
    referenceField: 'kenaikanPangkatId' | 'kgbId' | 'pensiunId';
    jenis: string;
    nama: string;
    email: null | string; 
    sendEmail: () => Promise<any>;
  }) {
    if (!email) {
      this.logger.warn(`${nama} belum memiliki email.`);
      return;
    }

    const log = await this.prismaService.notificationLog.findFirst({
      where: {
        pegawaiId,
        jenis,
        [referenceField]: referenceId,
      },
    });

    if (log) {
      this.logger.log(
        `Lewati ${jenis} - ${nama}, notifikasi sudah pernah dikirim.`,
      );
      return;
    }

    await sendEmail();

    await this.prismaService.notificationLog.create({
      data: {
        pegawaiId,
        jenis,
        [referenceField]: referenceId,
      },
    });

    this.logger.log(`${jenis} berhasil dikirim ke ${nama}`);
  }

  @Cron(CronExpression.EVERY_DAY_AT_8AM)
  async handleDailyNotification() {
    this.logger.log('===== CRON BERJALAN =====');

    const dashboard = await this.dashboardService.findAll();

    // ==========================
    // KENAIKAN PANGKAT
    // ==========================
    if (dashboard.listKenaikanPangkat30Hari.length === 0) {
      this.logger.log('Tidak ada kenaikan pangkat.');
    } else {
      for (const item of dashboard.listKenaikanPangkat30Hari) {
        await this.processNotification({
          pegawaiId: item.pegawaiId,
          referenceId: item.id,
          referenceField: 'kenaikanPangkatId',
          jenis: 'KENAIKAN_PANGKAT',
          nama: item.pegawai.nama,
          email: item.pegawai.email,
          sendEmail: () =>
            this.notificationService.sendKenaikanPangkatEmail(item),
        });
      }
    }

    // ==========================
    // KGB
    // ==========================
    if (dashboard.listKgb30Hari.length === 0) {
      this.logger.log('Tidak ada KGB.');
    } else {
      for (const item of dashboard.listKgb30Hari) {
        await this.processNotification({
          pegawaiId: item.pegawaiId,
          referenceId: item.id,
          referenceField: 'kgbId',
          jenis: 'KGB',
          nama: item.pegawai.nama,
          email: item.pegawai.email,
          sendEmail: () =>
            this.notificationService.sendKgbEmail(item),
        });
      }
    }

    // ==========================
    // PENSIUN
    // ==========================
    if (dashboard.listPensiun6Bulan.length === 0) {
      this.logger.log('Tidak ada pegawai yang akan pensiun.');
    } else {
      for (const item of dashboard.listPensiun6Bulan) {
        await this.processNotification({
          pegawaiId: item.pegawaiId,
          referenceId: item.id,
          referenceField: 'pensiunId',
          jenis: 'PENSIUN',
          nama: item.pegawai.nama,
          email: item.pegawai.email,
          sendEmail: () =>
            this.notificationService.sendPensiunEmail(item),
        });
      }
    }
  }
}