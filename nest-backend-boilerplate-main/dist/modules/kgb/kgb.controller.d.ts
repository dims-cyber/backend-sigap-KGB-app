import { KgbService } from './kgb.service';
import { CreateKgbDto } from './dto/create-kgb.dto';
import { UpdateKgbDto } from './dto/update-kgb.dto';
export declare class KgbController {
    private readonly kgbService;
    constructor(kgbService: KgbService);
    findAll(): Promise<({
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
            nomorHp: string | null;
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
    })[]>;
    findOne(id: number): Promise<{
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
            nomorHp: string | null;
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
    }>;
    create(createKgbDto: CreateKgbDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nomorSk: string | null;
        tmtTerakhir: Date | null;
        pegawaiId: number;
        tanggalSk: Date | null;
        tmtBerikutnya: Date | null;
        status: string | null;
    }>;
    update(id: number, updateKgbDto: UpdateKgbDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nomorSk: string | null;
        tmtTerakhir: Date | null;
        pegawaiId: number;
        tanggalSk: Date | null;
        tmtBerikutnya: Date | null;
        status: string | null;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        nomorSk: string | null;
        tmtTerakhir: Date | null;
        pegawaiId: number;
        tanggalSk: Date | null;
        tmtBerikutnya: Date | null;
        status: string | null;
    }>;
}
