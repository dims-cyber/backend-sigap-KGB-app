import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
export declare class PegawaiController {
    private readonly pegawaiService;
    constructor(pegawaiService: PegawaiService);
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
