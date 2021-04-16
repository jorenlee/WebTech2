import { PartialType } from '@nestjs/mapped-types';
import { CreateTrexcyDto } from './create-trexcy.dto';

export class UpdateTrexcyDto extends PartialType(CreateTrexcyDto) {}
