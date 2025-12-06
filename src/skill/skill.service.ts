import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name) private readonly skillModel: Model<Skill>,
  ) {}

  async create(createSkillDto: CreateSkillDto) {
    return await this.skillModel.create(createSkillDto);
  }

  async findAll() {
    return await this.skillModel.find().sort({ createdAt: -1 });
  }

  async findOne(id: string) {
    return await this.skillModel.findById(id);
  }

  async update(id: string, updateSkillDto: UpdateSkillDto) {
    return await this.skillModel.findByIdAndUpdate(id, updateSkillDto, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.skillModel.findByIdAndDelete(id);
  }
}
