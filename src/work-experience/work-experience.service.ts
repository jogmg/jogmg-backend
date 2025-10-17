import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkExperienceDto } from './dto/create-work-experience.dto';
import { UpdateWorkExperienceDto } from './dto/update-work-experience.dto';
import { WorkExperience } from './entities/work-experience.entity';

@Injectable()
export class WorkExperienceService {
  constructor(
    @InjectModel(WorkExperience.name)
    private readonly workExperienceModel: Model<WorkExperience>,
  ) {}

  async create(createWorkExperienceDto: CreateWorkExperienceDto) {
    return await this.workExperienceModel.create(createWorkExperienceDto);
  }

  async findAll() {
    return await this.workExperienceModel.find().sort({ updatedAt: -1 });
  }

  async findOne(id: string) {
    return await this.workExperienceModel.findById(id);
  }

  async update(id: string, updateWorkExperienceDto: UpdateWorkExperienceDto) {
    return await this.workExperienceModel.findByIdAndUpdate(
      id,
      updateWorkExperienceDto,
      { new: true },
    );
  }

  async delete(id: string) {
    return await this.workExperienceModel.findByIdAndDelete(id);
  }
}
