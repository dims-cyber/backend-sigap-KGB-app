import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateKenaikanPangkatDto } from './dto/create-kenaikan-pangkat.dto';
import { UpdateKenaikanPangkatDto } from './dto/update-kenaikan-pangkat.dto';
export declare class KenaikanPangkatService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(createDto: CreateKenaikanPangkatDto): Promise<{
        id: number;
        pegawaiId: number;
        pangkatBaru: string;
        golonganBaru: string;
        tmtKenaikan: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: number): Promise<{
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
    }>;
    update(id: number, updateDto: UpdateKenaikanPangkatDto): Promise<{
        id: number;
        pegawaiId: number;
        pangkatBaru: string;
        golonganBaru: string;
        tmtKenaikan: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        pegawaiId: number;
        pangkatBaru: string;
        golonganBaru: string;
        tmtKenaikan: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
