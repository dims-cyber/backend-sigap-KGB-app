import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Param, ParseIntPipe, Post } from '@nestjs/common';
@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Get('test-email')
  async testEmail() {
    return this.notificationService.sendEmail(
      'dimaspramudya489@gmail.com',
      'Testing Email SIM Kepegawaian',
      `
      <h2>Halo Dimas 👋</h2>

      <p>Email ini dikirim dari backend NestJS.</p>

      <p>Jika email ini sampai, berarti konfigurasi Gmail berhasil.</p>

      <hr>

      <b>SIM Kepegawaian</b>
      `,
    );
  }

  @Get('log')
  async getLogs() {
    return {
      status: 'success',
      message: 'Success',
      data: await this.notificationService.getNotificationLogs(),
    };
  }
  @Post('send-kgb/:id')
async sendKgb(
  @Param('id', ParseIntPipe) id: number,
) {
  return this.notificationService.sendKgbNotification(id);
}

@Post('send-pangkat/:id')
async sendPangkat(
  @Param('id', ParseIntPipe) id: number,
) {
  return this.notificationService.sendKenaikanPangkatNotification(id);
}

@Post('send-pensiun/:id')
async sendPensiun(
  @Param('id', ParseIntPipe) id: number,
) {
  return this.notificationService.sendPensiunNotification(id);
}
}