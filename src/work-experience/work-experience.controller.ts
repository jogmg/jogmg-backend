import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { WorkExperienceService } from './work-experience.service';

@Controller('work-experiences')
export class WorkExperienceController {
  constructor(private readonly workExperienceService: WorkExperienceService) {}

  @Post()
  async create(@Body() createWorkExperienceDto: CreateWorkExperienceDto) {
    return await this.workExperienceService.create(createWorkExperienceDto);
  }

  @Get()
  async findAll() {
    return await this.workExperienceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.workExperienceService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkExperienceDto: UpdateWorkExperienceDto,
  ) {
    return await this.workExperienceService.update(id, updateWorkExperienceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.workExperienceService.delete(id);
  }
}
