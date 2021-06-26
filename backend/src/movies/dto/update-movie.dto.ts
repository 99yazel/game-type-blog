import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMoiveDto } from './create-movie.dto';

export class UpdateMoiveDto extends PartialType(CreateMoiveDto) {}
// {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }
