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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
const common_2 = require("@nestjs/common");
let NotificationController = class NotificationController {
    notificationService;
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    async testEmail() {
        return this.notificationService.sendEmail('dimaspramudya489@gmail.com', 'Testing Email SIM Kepegawaian', `
      <h2>Halo Dimas 👋</h2>

      <p>Email ini dikirim dari backend NestJS.</p>

      <p>Jika email ini sampai, berarti konfigurasi Gmail berhasil.</p>

      <hr>

      <b>SIM Kepegawaian</b>
      `);
    }
    async getLogs() {
        return {
            status: 'success',
            message: 'Success',
            data: await this.notificationService.getNotificationLogs(),
        };
    }
    async sendKgb(id) {
        return this.notificationService.sendKgbNotification(id);
    }
    async sendPangkat(id) {
        return this.notificationService.sendKenaikanPangkatNotification(id);
    }
    async sendPensiun(id) {
        return this.notificationService.sendPensiunNotification(id);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Get)('test-email'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "testEmail", null);
__decorate([
    (0, common_1.Get)('log'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getLogs", null);
__decorate([
    (0, common_2.Post)('send-kgb/:id'),
    __param(0, (0, common_2.Param)('id', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendKgb", null);
__decorate([
    (0, common_2.Post)('send-pangkat/:id'),
    __param(0, (0, common_2.Param)('id', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendPangkat", null);
__decorate([
    (0, common_2.Post)('send-pensiun/:id'),
    __param(0, (0, common_2.Param)('id', common_2.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendPensiun", null);
exports.NotificationController = NotificationController = __decorate([
    (0, common_1.Controller)('notification'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map