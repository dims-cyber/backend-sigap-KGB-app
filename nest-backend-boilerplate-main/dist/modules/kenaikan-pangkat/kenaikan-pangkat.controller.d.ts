import { KenaikanPangkatService } from './kenaikan-pangkat.service';
export declare class KenaikanPangkatController {
    private readonly kenaikanPangkatService;
    constructor(kenaikanPangkatService: KenaikanPangkatService);
    findAll(): Promise<({
        pegawai: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
        id: number;
        pegawaiId: number;
        pangkatBaru: string;
        golonganBaru: string;
        tmtKenaikan: Date;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
}
