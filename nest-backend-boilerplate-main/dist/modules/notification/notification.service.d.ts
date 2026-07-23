import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from '../../core/prisma/prisma.service';
export declare class NotificationService {
    private readonly mailerService;
    private readonly prismaService;
    private readonly logger;
    constructor(mailerService: MailerService, prismaService: PrismaService);
    sendEmail(to: string, subject: string, html: string): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    sendKenaikanPangkatEmail(item: any): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    sendKgbEmail(item: any): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    sendPensiunEmail(item: any): Promise<{
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
    sendKgbNotification(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    sendKenaikanPangkatNotification(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    sendPensiunNotification(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getNotificationLogs(): Promise<{
        createdAt: Date;
        id: number;
        pegawaiId: number;
        jenis: string;
        kenaikanPangkatId: number | null;
        kgbId: number | null;
    }[]>;
}
