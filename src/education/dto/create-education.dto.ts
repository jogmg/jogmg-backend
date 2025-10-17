import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  field: string;

  @IsNotEmpty()
  date: string;

  @IsOptional()
  imgSrc: string;
}
