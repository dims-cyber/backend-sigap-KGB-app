"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const notification_controller_1 = require("./notification.controller");
const notification_service_1 = require("./notification.service");
const notification_scheduler_1 = require("./notification.scheduler");
const dashboard_module_1 = require("../dashboard/dashboard.module");
const prisma_module_1 = require("../../core/prisma/prisma.module");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            dashboard_module_1.DashboardModule,
            prisma_module_1.PrismaModule,
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    transport: {
                        host: config.get('MAIL_HOST'),
                        port: Number(config.get('MAIL_PORT')),
                        secure: false,
                        auth: {
                            user: config.get('MAIL_USER'),
                            pass: config.get('MAIL_PASSWORD'),
                        },
                    },
                    defaults: {
                        from: config.get('MAIL_FROM'),
                    },
                }),
            }),
        ],
        controllers: [
            notification_controller_1.NotificationController,
        ],
        providers: [
            notification_service_1.NotificationService,
            notification_scheduler_1.NotificationScheduler,
        ],
        exports: [
            notification_service_1.NotificationService,
        ],
    })
], NotificationModule);
//# sourceMappingURL=notification.module.js.map