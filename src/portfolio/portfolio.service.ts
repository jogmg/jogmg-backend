import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { Portfolio } from './entities/portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel(Portfolio.name)
    private readonly portfolioModel: Model<Portfolio>,
  ) {}

  async create(createPortfolioDto: CreatePortfolioDto) {
    return await this.portfolioModel.create(createPortfolioDto);
  }

  async findAll() {
    return await this.portfolioModel.find().sort({ createdAt: -1 });
  }

  async findOne(id: string) {
    return await this.portfolioModel.findById(id);
  }

  async update(id: string, updatePortfolioDto: UpdatePortfolioDto) {
    return await this.portfolioModel.findByIdAndUpdate(id, updatePortfolioDto, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.portfolioModel.findByIdAndDelete(id);
  }
}
