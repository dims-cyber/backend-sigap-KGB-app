import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    testEmail(): Promise<{
        success: boolean;
        message: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
    }>;
    getLogs(): Promise<{
        status: string;
        message: string;
        data: {
            createdAt: Date;
            id: number;
            pegawaiId: number;
            jenis: string;
            kenaikanPangkatId: number | null;
            kgbId: number | null;
        }[];
    }>;
    sendKgb(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    sendPangkat(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    sendPensiun(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
