"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let NotificationService = NotificationService_1 = class NotificationService {
    mailerService;
    prismaService;
    logger = new common_1.Logger(NotificationService_1.name);
    constructor(mailerService, prismaService) {
        this.mailerService = mailerService;
        this.prismaService = prismaService;
    }
    async sendEmail(to, subject, html) {
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
        }
        catch (error) {
            this.logger.error(error);
            return {
                success: false,
                message: 'Gagal mengirim email',
                error: error.message,
            };
        }
    }
    async sendKenaikanPangkatEmail(item) {
        return this.sendEmail(item.pegawai.email, 'Notifikasi Kenaikan Pangkat', `
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
    `);
    }
    async sendKgbEmail(item) {
        return this.sendEmail(item.pegawai.email, 'Notifikasi Kenaikan Gaji Berkala', `
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
    `);
    }
    async sendPensiunEmail(item) {
        return this.sendEmail(item.pegawai.email, 'Notifikasi Masa Pensiun', `
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
    `);
    }
    async sendWhatsapp(phone, message) {
        this.logger.log(`Mengirim WhatsApp ke ${phone}`);
        return {
            success: true,
            message: 'WhatsApp berhasil dikirim (dummy)',
        };
    }
    async sendKgbNotification(id) {
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
        await this.sendEmail(data.pegawai.email, 'Notifikasi Kenaikan Gaji Berkala', `
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
    `);
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
    async sendKenaikanPangkatNotification(id) {
        const data = await this.prismaService.kenaikanPangkat.findUnique({
            where: { id },
            include: {
                pegawai: true,
            },
        });
        if (!data) {
            throw new Error('Data tidak ditemukan');
        }
        await this.sendEmail(data.pegawai.email, 'Notifikasi Kenaikan Pangkat', `
      <h2>SIM Kepegawaian</h2>

      Halo <b>${data.pegawai.nama}</b>

      <br><br>

      Pangkat baru Anda berlaku pada
      <b>${data.tmtKenaikan.toLocaleDateString('id-ID')}</b>.
    `);
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
    async sendPensiunNotification(id) {
        const data = await this.prismaService.pensiun.findUnique({
            where: { id },
            include: {
                pegawai: true,
            },
        });
        if (!data) {
            throw new Error('Data tidak ditemukan');
        }
        await this.sendEmail(data.pegawai.email, 'Notifikasi Pensiun', `
      <h2>SIM Kepegawaian</h2>

      Halo <b>${data.pegawai.nama}</b>

      <br><br>

      Masa pensiun Anda akan berlaku pada

      <b>${data.tanggalPensiun.toLocaleDateString('id-ID')}</b>.
    `);
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
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map