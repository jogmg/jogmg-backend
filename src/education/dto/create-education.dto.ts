import { IsNotEmpty } from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  field: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  imgSrc: string;
}
