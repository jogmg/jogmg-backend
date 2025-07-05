import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PorfolioSchema, Portfolio } from './entities/portfolio.entity';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Portfolio.name, schema: PorfolioSchema },
    ]),
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
