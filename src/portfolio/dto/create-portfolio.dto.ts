import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { IDesc } from '../entities/portfolio.entity';

export class CreatePortfolioDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  bgUrl: string;

  @IsNotEmpty()
  mainUrl: string;

  @IsOptional()
  ctaUrl?: string;

  @IsOptional()
  ctaType?: string;

  @IsNotEmpty()
  @IsArray()
  descs: IDesc[];
}
