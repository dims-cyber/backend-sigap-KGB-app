import {
  IsDateString,
  IsInt,
  IsString,
} from 'class-validator';

export class CreateKenaikanPangkatDto {
  @IsInt()
  pegawaiId: number;

  @IsString()
  pangkatBaru: string;

  @IsString()
  golonganBaru: string;

  @IsDateString()
  tmtKenaikan: string;
}