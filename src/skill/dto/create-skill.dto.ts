import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  imgSrc: string;
}
