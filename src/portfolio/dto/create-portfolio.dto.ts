import { IsArray, IsNotEmpty } from 'class-validator';
import { IDesc } from '../entities/portfolio.entity';

export class CreatePortfolioDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  bgUrl: string;

  @IsNotEmpty()
  mainUrl: string;

  @IsNotEmpty()
  ctaUrl: string;

  @IsNotEmpty()
  ctaType: string;

  @IsNotEmpty()
  @IsArray()
  descs: IDesc[];
}
