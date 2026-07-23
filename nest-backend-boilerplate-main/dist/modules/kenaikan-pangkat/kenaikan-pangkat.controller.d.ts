import { KenaikanPangkatService } from './kenaikan-pangkat.service';
import { CreateKenaikanPangkatDto } from './dto/create-kenaikan-pangkat.dto';
import { UpdateKenaikanPangkatDto } from './dto/update-kenaikan-pangkat.dto';
export declare class KenaikanPangkatController {
    private readonly kenaikanPangkatService;
    constructor(kenaikanPangkatService: KenaikanPangkatService);
    create(createDto: CreateKenaikanPangkatDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        pegawaiId: number;
        pangkatBaru: string;
        golonganBaru: string;
        tmtKenaikan: Date;
    }>;
    findAll(): Promise<({
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
    })[]>;
    findOne(id: number): Promise<{
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
    }>;
    update(id: number, updateDto: UpdateKenaikanPangkatDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        pegawaiId: number;
        pangkatBaru: string;
        golonganBaru: string;
        tmtKenaikan: Date;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        pegawaiId: number;
        pangkatBaru: string;
        golonganBaru: string;
        tmtKenaikan: Date;
    }>;
}
