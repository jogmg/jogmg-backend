import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateWorkExperienceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  imgSrc: string;

  @IsNotEmpty()
  @IsArray()
  descs: string[];
}
