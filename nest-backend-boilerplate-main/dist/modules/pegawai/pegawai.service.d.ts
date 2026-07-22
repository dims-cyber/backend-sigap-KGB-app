import { PrismaService } from '../../core/prisma/prisma.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
export declare class PegawaiService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
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
    }[]>;
    findOne(id: number): Promise<{
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
    }>;
    create(createPegawaiDto: CreatePegawaiDto): Promise<{
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
    }>;
    update(id: number, updatePegawaiDto: UpdatePegawaiDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
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
    }>;
}
