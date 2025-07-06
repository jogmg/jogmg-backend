import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { PortfolioService } from './portfolio.service';

@Controller('portfolios')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  async create(@Body() createPortfolioDto: CreatePortfolioDto) {
    return await this.portfolioService.create(createPortfolioDto);
  }

  @Get()
  async findAll() {
    return await this.portfolioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.portfolioService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePortfolioDto: UpdatePortfolioDto,
  ) {
    return await this.portfolioService.update(+id, updatePortfolioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.portfolioService.delete(+id);
  }
}
