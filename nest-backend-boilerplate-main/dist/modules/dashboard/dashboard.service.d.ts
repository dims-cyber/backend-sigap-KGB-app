import { PrismaService } from '../../core/prisma/prisma.service';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        totalPegawai: number;
        totalKgb: number;
        kgb30Hari: number;
        kgbSudah: number;
        statistik: {
            sudah: number;
            segera: number;
            normal: number;
        };
        pensiun6Bulan: number;
        listPensiun6Bulan: ({
            pegawai: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            pegawaiId: number;
            tanggalPensiun: Date;
        })[];
        listKgb30Hari: ({
            pegawai: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            nomorSk: string | null;
            tmtTerakhir: Date | null;
            pegawaiId: number;
            tanggalSk: Date | null;
            tmtBerikutnya: Date | null;
            status: string | null;
        })[];
        listKgbSudah: ({
            pegawai: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            nomorSk: string | null;
            tmtTerakhir: Date | null;
            pegawaiId: number;
            tanggalSk: Date | null;
            tmtBerikutnya: Date | null;
            status: string | null;
        })[];
    }>;
}
