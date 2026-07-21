import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateKgbDto {
  @IsInt()
  pegawaiId: number;

  @IsOptional()
  @IsString()
  nomorSk?: string;

  @IsOptional()
  @IsDateString()
  tanggalSk?: string;

  @IsOptional()
  @IsDateString()
  tmtTerakhir?: string;

  @IsOptional()
  @IsDateString()
  tmtBerikutnya?: string;

  @IsOptional()
  @IsString()
  status?: string;
}