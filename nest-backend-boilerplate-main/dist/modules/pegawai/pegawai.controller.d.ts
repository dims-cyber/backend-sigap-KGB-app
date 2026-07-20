import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
export declare class PegawaiController {
    private readonly pegawaiService;
    constructor(pegawaiService: PegawaiService);
    findAll(): Promise<{
        nip: string;
        nama: string;
        pangkat: string;
        golongan: string;
        jabatan: string;
        nomorSk: string | null;
        tanggalSK: Date | null;
        tmtTerakhir: Date | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        nip: string;
        nama: string;
        pangkat: string;
        golongan: string;
        jabatan: string;
        nomorSk: string | null;
        tanggalSK: Date | null;
        tmtTerakhir: Date | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createPegawaiDto: CreatePegawaiDto): Promise<{
        nip: string;
        nama: string;
        pangkat: string;
        golongan: string;
        jabatan: string;
        nomorSk: string | null;
        tanggalSK: Date | null;
        tmtTerakhir: Date | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updatePegawaiDto: UpdatePegawaiDto): Promise<{
        nip: string;
        nama: string;
        pangkat: string;
        golongan: string;
        jabatan: string;
        nomorSk: string | null;
        tanggalSK: Date | null;
        tmtTerakhir: Date | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        nip: string;
        nama: string;
        pangkat: string;
        golongan: string;
        jabatan: string;
        nomorSk: string | null;
        tanggalSK: Date | null;
        tmtTerakhir: Date | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
