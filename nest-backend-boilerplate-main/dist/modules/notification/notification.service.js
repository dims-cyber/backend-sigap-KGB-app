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
let NotificationService = NotificationService_1 = class NotificationService {
    mailerService;
    logger = new common_1.Logger(NotificationService_1.name);
    constructor(mailerService) {
        this.mailerService = mailerService;
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
    async sendWhatsapp(phone, message) {
        this.logger.log(`Mengirim WhatsApp ke ${phone}`);
        return {
            success: true,
            message: 'WhatsApp berhasil dikirim (dummy)',
        };
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map