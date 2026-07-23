import {
  IsDateString,
  IsInt,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateKgbDto {
  @IsInt()
  pegawaiId: number;

  @IsString()
  nomorSk: string;

  @IsDateString()
  tanggalSk: string;

  @IsDateString()
  tmtKgb: string;

  @IsNumber()
  gajiLama: number;

  @IsNumber()
  gajiBaru: number;
}