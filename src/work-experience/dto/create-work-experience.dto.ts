import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWorkExperienceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  date: string;

  @IsOptional()
  imgSrc?: string;

  @IsOptional()
  @IsArray()
  descs?: string[];
}
