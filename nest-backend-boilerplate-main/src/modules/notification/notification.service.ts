import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly mailerService: MailerService,
  ) {}

  async sendEmail(
    to: string,
    subject: string,
    html: string,
  ) {
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
    } catch (error) {
      this.logger.error(error);

      return {
        success: false,
        message: 'Gagal mengirim email',
        error: error.message,
      };
    }
  }

  async sendWhatsapp(
    phone: string,
    message: string,
  ) {
    this.logger.log(`Mengirim WhatsApp ke ${phone}`);

    return {
      success: true,
      message: 'WhatsApp berhasil dikirim (dummy)',
    };
  }
}