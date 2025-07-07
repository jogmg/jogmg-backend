import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  async create(@Body() createEducationDto: CreateEducationDto) {
    return await this.educationService.create(createEducationDto);
  }

  @Get()
  async findAll() {
    return await this.educationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.educationService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto,
  ) {
    return await this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.educationService.delete(id);
  }
}
