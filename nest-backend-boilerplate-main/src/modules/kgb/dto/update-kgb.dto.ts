import { PartialType } from '@nestjs/mapped-types';
import { CreateKgbDto } from './create-kgb.dto';

export class UpdateKgbDto extends PartialType(CreateKgbDto) {}