import {IsDateString, IsOptional, IsString} from 'class-validator';

export class CreatePegawaiDto {
    @IsString()
    nip: string;

    @IsString()
    nama: string;

    @IsString()
    pangkat: string;

    @IsString()
    golongan: string;

    @IsString()
    jabatan: string;

    @IsOptional()
    @IsString()
    nomorSk?: string;

    @IsOptional()
    @IsDateString()
    tanggalSK?: string;
    
    @IsOptional()
    @IsDateString()
    tmtTerakhir?: string;
}