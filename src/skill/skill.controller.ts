import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  async create(@Body() createSkillDto: CreateSkillDto) {
    return await this.skillService.create(createSkillDto);
  }

  @Get()
  async findAll() {
    return await this.skillService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.skillService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSkillDto: UpdateSkillDto,
  ) {
    return await this.skillService.update(id, updateSkillDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.skillService.delete(id);
  }
}
