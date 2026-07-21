import { PartialType } from '@nestjs/mapped-types';
import { CreateKenaikanPangkatDto } from './create-kenaikan-pangkat.dto';

export class UpdateKenaikanPangkatDto extends PartialType(
  CreateKenaikanPangkatDto,
) {}
