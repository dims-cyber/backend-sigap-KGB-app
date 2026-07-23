import { DashboardService } from '../dashboard/dashboard.service';
import { NotificationService } from './notification.service';
import { PrismaService } from '../../core/prisma/prisma.service';
export declare class NotificationScheduler {
    private readonly dashboardService;
    private readonly notificationService;
    private readonly prismaService;
    private readonly logger;
    constructor(dashboardService: DashboardService, notificationService: NotificationService, prismaService: PrismaService);
    private processNotification;
    handleDailyNotification(): Promise<void>;
}
