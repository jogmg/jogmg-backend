import { IsNotEmpty } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  imgSrc: string;
}
