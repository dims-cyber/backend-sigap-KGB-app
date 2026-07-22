import { MailerService } from '@nestjs-modules/mailer';
export declare class NotificationService {
    private readonly mailerService;
    private readonly logger;
    constructor(mailerService: MailerService);
    sendEmail(to: string, subject: string, html: string): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    sendWhatsapp(phone: string, message: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
