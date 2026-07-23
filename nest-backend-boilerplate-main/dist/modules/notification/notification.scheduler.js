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
var NotificationScheduler_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationScheduler = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const dashboard_service_1 = require("../dashboard/dashboard.service");
const notification_service_1 = require("./notification.service");
const prisma_service_1 = require("../../core/prisma/prisma.service");
let NotificationScheduler = NotificationScheduler_1 = class NotificationScheduler {
    dashboardService;
    notificationService;
    prismaService;
    logger = new common_1.Logger(NotificationScheduler_1.name);
    constructor(dashboardService, notificationService, prismaService) {
        this.dashboardService = dashboardService;
        this.notificationService = notificationService;
        this.prismaService = prismaService;
    }
    async processNotification({ pegawaiId, referenceId, referenceField, jenis, nama, email, sendEmail, }) {
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
            this.logger.log(`Lewati ${jenis} - ${nama}, notifikasi sudah pernah dikirim.`);
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
    async handleDailyNotification() {
        this.logger.log('===== CRON BERJALAN =====');
        const dashboard = await this.dashboardService.findAll();
        if (dashboard.listKenaikanPangkat30Hari.length === 0) {
            this.logger.log('Tidak ada kenaikan pangkat.');
        }
        else {
            for (const item of dashboard.listKenaikanPangkat30Hari) {
                await this.processNotification({
                    pegawaiId: item.pegawaiId,
                    referenceId: item.id,
                    referenceField: 'kenaikanPangkatId',
                    jenis: 'KENAIKAN_PANGKAT',
                    nama: item.pegawai.nama,
                    email: item.pegawai.email,
                    sendEmail: () => this.notificationService.sendKenaikanPangkatEmail(item),
                });
            }
        }
        if (dashboard.listKgb30Hari.length === 0) {
            this.logger.log('Tidak ada KGB.');
        }
        else {
            for (const item of dashboard.listKgb30Hari) {
                await this.processNotification({
                    pegawaiId: item.pegawaiId,
                    referenceId: item.id,
                    referenceField: 'kgbId',
                    jenis: 'KGB',
                    nama: item.pegawai.nama,
                    email: item.pegawai.email,
                    sendEmail: () => this.notificationService.sendKgbEmail(item),
                });
            }
        }
        if (dashboard.listPensiun6Bulan.length === 0) {
            this.logger.log('Tidak ada pegawai yang akan pensiun.');
        }
        else {
            for (const item of dashboard.listPensiun6Bulan) {
                await this.processNotification({
                    pegawaiId: item.pegawaiId,
                    referenceId: item.id,
                    referenceField: 'pensiunId',
                    jenis: 'PENSIUN',
                    nama: item.pegawai.nama,
                    email: item.pegawai.email,
                    sendEmail: () => this.notificationService.sendPensiunEmail(item),
                });
            }
        }
    }
};
exports.NotificationScheduler = NotificationScheduler;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_8AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationScheduler.prototype, "handleDailyNotification", null);
exports.NotificationScheduler = NotificationScheduler = NotificationScheduler_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService,
        notification_service_1.NotificationService,
        prisma_service_1.PrismaService])
], NotificationScheduler);
//# sourceMappingURL=notification.scheduler.js.map