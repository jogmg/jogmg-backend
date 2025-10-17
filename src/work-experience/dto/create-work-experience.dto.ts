import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkExperienceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  date: string;

  @IsOptional()
  imgSrc: string;

  @IsNotEmpty()
  @IsArray()
  descs: string[];
}
