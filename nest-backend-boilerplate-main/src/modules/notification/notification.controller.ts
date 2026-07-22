import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';

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
}