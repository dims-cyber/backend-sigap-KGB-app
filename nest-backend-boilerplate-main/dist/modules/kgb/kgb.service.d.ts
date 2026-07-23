import { PrismaService } from '../../core/prisma/prisma.service';
import { CreateKgbDto } from './dto/create-kgb.dto';
import { UpdateKgbDto } from './dto/update-kgb.dto';
export declare class KgbService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
        id: number;
        nomorSk: string;
        pegawaiId: number;
        tanggalSk: Date;
        tmtKgb: Date;
        gajiLama: number;
        gajiBaru: number;
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
        id: number;
        nomorSk: string;
        pegawaiId: number;
        tanggalSk: Date;
        tmtKgb: Date;
        gajiLama: number;
        gajiBaru: number;
    }>;
    create(createKgbDto: CreateKgbDto): Promise<{
        id: number;
        nomorSk: string;
        pegawaiId: number;
        tanggalSk: Date;
        tmtKgb: Date;
        gajiLama: number;
        gajiBaru: number;
    }>;
    update(id: number, updateKgbDto: UpdateKgbDto): Promise<{
        id: number;
        nomorSk: string;
        pegawaiId: number;
        tanggalSk: Date;
        tmtKgb: Date;
        gajiLama: number;
        gajiBaru: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        nomorSk: string;
        pegawaiId: number;
        tanggalSk: Date;
        tmtKgb: Date;
        gajiLama: number;
        gajiBaru: number;
    }>;
}
