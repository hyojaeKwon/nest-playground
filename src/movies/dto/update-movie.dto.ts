import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMoiveDto } from './create-movie.dto';

// export class UpdateMoiveDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }

export class UpdateMoiveDto extends PartialType(CreateMoiveDto) {}
