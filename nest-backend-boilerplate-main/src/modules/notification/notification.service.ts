import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly mailerService: MailerService,
    private readonly prismaService: PrismaService,
  ) {}

  async sendEmail(
    to: string,
    subject: string,
    html: string,
  ) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        html,
      });

      this.logger.log(`Email berhasil dikirim ke ${to}`);

      return {
        success: true,
        message: 'Email berhasil dikirim',
      };
    } catch (error) {
      this.logger.error(error);

      return {
        success: false,
        message: 'Gagal mengirim email',
        error: error.message,
      };
    }
  }

  async sendKenaikanPangkatEmail(item: any) {
  return this.sendEmail(
    item.pegawai.email,
    'Notifikasi Kenaikan Pangkat',
    `
    <h2>SIM Kepegawaian</h2>

    <p>Halo <b>${item.pegawai.nama}</b>,</p>

    <p>
      Kenaikan pangkat Anda akan berlaku pada
      <b>${item.tmtKenaikan.toLocaleDateString('id-ID')}</b>.
    </p>

    <table border="1" cellpadding="8">
      <tr>
        <td>Nama</td>
        <td>${item.pegawai.nama}</td>
      </tr>

      <tr>
        <td>NIP</td>
        <td>${item.pegawai.nip}</td>
      </tr>

      <tr>
        <td>Pangkat Baru</td>
        <td>${item.pangkatBaru}</td>
      </tr>

      <tr>
        <td>Golongan Baru</td>
        <td>${item.golonganBaru}</td>
      </tr>
    </table>

    <br>

    <b>Harap segera menyiapkan berkas yang diperlukan.</b>
    `,
  );
}

async sendKgbEmail(item: any) {
  return this.sendEmail(
    item.pegawai.email,
    'Notifikasi Kenaikan Gaji Berkala',
    `
    <h2>SIM Kepegawaian</h2>

    <p>Halo <b>${item.pegawai.nama}</b>,</p>

    <p>
      Kenaikan Gaji Berkala Anda akan berlaku pada
      <b>${item.tmtKgb.toLocaleDateString('id-ID')}</b>.
    </p>

    <table border="1" cellpadding="8">
      <tr>
        <td>Nama</td>
        <td>${item.pegawai.nama}</td>
      </tr>

      <tr>
        <td>NIP</td>
        <td>${item.pegawai.nip}</td>
      </tr>

      <tr>
        <td>Gaji Lama</td>
        <td>Rp ${Number(item.gajiLama).toLocaleString('id-ID')}</td>
      </tr>

      <tr>
        <td>Gaji Baru</td>
        <td>Rp ${Number(item.gajiBaru).toLocaleString('id-ID')}</td>
      </tr>
    </table>

    <br>

    <b>Harap segera menyiapkan berkas yang diperlukan.</b>
    `,
  );
}

async sendPensiunEmail(item: any) {
  return this.sendEmail(
    item.pegawai.email,
    'Notifikasi Masa Pensiun',
    `
    <h2>SIM Kepegawaian</h2>

    <p>Halo <b>${item.pegawai.nama}</b>,</p>

    <p>
      Masa pensiun Anda akan berlaku pada
      <b>${item.tanggalPensiun.toLocaleDateString('id-ID')}</b>.
    </p>

    <table border="1" cellpadding="8">
      <tr>
        <td>Nama</td>
        <td>${item.pegawai.nama}</td>
      </tr>

      <tr>
        <td>NIP</td>
        <td>${item.pegawai.nip}</td>
      </tr>

      <tr>
        <td>Tanggal Pensiun</td>
        <td>${item.tanggalPensiun.toLocaleDateString('id-ID')}</td>
      </tr>
    </table>

    <br>

    <b>Harap segera mempersiapkan berkas administrasi pensiun.</b>
    `,
  );
}

  async sendWhatsapp(
    phone: string,
    message: string,
  ) {
    this.logger.log(`Mengirim WhatsApp ke ${phone}`);

    return {
      success: true,
      message: 'WhatsApp berhasil dikirim (dummy)',
    };
  }

  async sendKgbNotification(id: number) {
  const data = await this.prismaService.kgb.findUnique({
    where: {
      id,
    },
    include: {
      pegawai: true,
    },
  });

  if (!data) {
    throw new Error('Data KGB tidak ditemukan');
  }

  if (!data.pegawai.email) {
    throw new Error('Pegawai belum memiliki email');
  }

  await this.sendEmail(
    data.pegawai.email!,
    'Notifikasi Kenaikan Gaji Berkala',
    `
      <h2>SIM Kepegawaian</h2>

      <p>Halo <b>${data.pegawai.nama}</b>,</p>

      <p>
      Kenaikan Gaji Berkala Anda berlaku pada
      <b>${data.tmtKgb.toLocaleDateString('id-ID')}</b>.
      </p>

      <table border="1" cellpadding="8">
        <tr>
          <td>Nama</td>
          <td>${data.pegawai.nama}</td>
        </tr>

        <tr>
          <td>NIP</td>
          <td>${data.pegawai.nip}</td>
        </tr>

        <tr>
          <td>Gaji Lama</td>
          <td>Rp ${Number(data.gajiLama).toLocaleString('id-ID')}</td>
        </tr>

        <tr>
          <td>Gaji Baru</td>
          <td>Rp ${Number(data.gajiBaru).toLocaleString('id-ID')}</td>
        </tr>
      </table>
    `,
  );

  await this.prismaService.notificationLog.create({
    data: {
      pegawaiId: data.pegawaiId,
      kgbId: data.id,
      jenis: 'KGB',
    },
  });

  return {
    success: true,
    message: 'Notifikasi KGB berhasil dikirim ulang',
  };
}

async sendKenaikanPangkatNotification(id: number) {
  const data =
    await this.prismaService.kenaikanPangkat.findUnique({
      where: { id },
      include: {
        pegawai: true,
      },
    });

  if (!data) {
    throw new Error('Data tidak ditemukan');
  }

  await this.sendEmail(
    data.pegawai.email!,
    'Notifikasi Kenaikan Pangkat',
    `
      <h2>SIM Kepegawaian</h2>

      Halo <b>${data.pegawai.nama}</b>

      <br><br>

      Pangkat baru Anda berlaku pada
      <b>${data.tmtKenaikan.toLocaleDateString('id-ID')}</b>.
    `,
  );

  await this.prismaService.notificationLog.create({
    data: {
      pegawaiId: data.pegawaiId,
      kenaikanPangkatId: data.id,
      jenis: 'KENAIKAN_PANGKAT',
    },
  });

  return {
    success: true,
    message: 'Notifikasi berhasil dikirim ulang',
  };
}

async sendPensiunNotification(id: number) {
  const data = await this.prismaService.pensiun.findUnique({
    where: { id },
    include: {
      pegawai: true,
    },
  });

  if (!data) {
    throw new Error('Data tidak ditemukan');
  }

  await this.sendEmail(
    data.pegawai.email!,
    'Notifikasi Pensiun',
    `
      <h2>SIM Kepegawaian</h2>

      Halo <b>${data.pegawai.nama}</b>

      <br><br>

      Masa pensiun Anda akan berlaku pada

      <b>${data.tanggalPensiun.toLocaleDateString('id-ID')}</b>.
    `,
  );

  await this.prismaService.notificationLog.create({
    data: {
      pegawaiId: data.pegawaiId,
      pensiunId: data.id,
      jenis: 'PENSIUN',
    },
  });

  return {
    success: true,
    message: 'Notifikasi berhasil dikirim ulang',
  };
}

  async getNotificationLogs() {
    return this.prismaService.notificationLog.findMany({
      include: {
        pegawai: {
          select: {
            nama: true,
            nip: true,
            email: true,
          },
        },

        kenaikanPangkat: {
          select: {
            id: true,
            tmtKenaikan: true,
            pangkatBaru: true,
            golonganBaru: true,
          },
        },

        kgb: {
          select: {
            id: true,
            tmtKgb: true,
            gajiLama: true,
            gajiBaru: true,
          },
        },

        pensiun: {
          select: {
            id: true,
            tanggalPensiun: true,
          },
        },
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}