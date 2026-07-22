import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DashboardService } from '../dashboard/dashboard.service';
import { NotificationService } from './notification.service';

@Injectable()
export class NotificationScheduler {
  private readonly logger = new Logger(NotificationScheduler.name);

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly notificationService: NotificationService,
  ) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleDailyNotification() {
    this.logger.log('===== CRON BERJALAN =====');

    const dashboard = await this.dashboardService.findAll();

    console.log(dashboard);
  }
}