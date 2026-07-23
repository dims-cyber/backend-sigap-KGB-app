import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    findAll(): Promise<{
        totalPegawai: number;
        totalKgb: number;
        totalKenaikanPangkat: number;
        kgb30Hari: number;
        kgbSudah: number;
        kenaikanPangkat30Hari: number;
        kenaikanPangkatSudah: number;
        statistik: {
            kgb: {
                sudah: number;
                segera: number;
                normal: number;
            };
            kenaikanPangkat: {
                sudah: number;
                segera: number;
                normal: number;
            };
        };
        pensiun6Bulan: number;
        listPensiun6Bulan: ({
            pegawai: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string | null;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
                nomorHp: string | null;
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
                email: string | null;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
                nomorHp: string | null;
            };
        } & {
            id: number;
            nomorSk: string;
            pegawaiId: number;
            tanggalSk: Date;
            tmtKgb: Date;
            gajiLama: number;
            gajiBaru: number;
        })[];
        listKgbSudah: ({
            pegawai: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string | null;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
                nomorHp: string | null;
            };
        } & {
            id: number;
            nomorSk: string;
            pegawaiId: number;
            tanggalSk: Date;
            tmtKgb: Date;
            gajiLama: number;
            gajiBaru: number;
        })[];
        listKenaikanPangkat30Hari: ({
            pegawai: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string | null;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
                nomorHp: string | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            pegawaiId: number;
            pangkatBaru: string;
            golonganBaru: string;
            tmtKenaikan: Date;
        })[];
        listKenaikanPangkatSudah: ({
            pegawai: {
                createdAt: Date;
                updatedAt: Date;
                id: number;
                email: string | null;
                nip: string;
                nama: string;
                pangkat: string;
                golongan: string;
                jabatan: string;
                nomorSk: string | null;
                tanggalSK: Date | null;
                tmtTerakhir: Date | null;
                nomorHp: string | null;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            pegawaiId: number;
            pangkatBaru: string;
            golonganBaru: string;
            tmtKenaikan: Date;
        })[];
    }>;
}
