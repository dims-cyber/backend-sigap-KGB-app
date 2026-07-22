import { DashboardService } from '../dashboard/dashboard.service';
import { NotificationService } from './notification.service';
export declare class NotificationScheduler {
    private readonly dashboardService;
    private readonly notificationService;
    private readonly logger;
    constructor(dashboardService: DashboardService, notificationService: NotificationService);
    handleDailyNotification(): Promise<void>;
}
