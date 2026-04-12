import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel(Education.name)
    private readonly educationModel: Model<Education>,
  ) {}
  async create(createEducationDto: CreateEducationDto) {
    return await this.educationModel.create(createEducationDto);
  }

  async findAll() {
    return await this.educationModel.find().sort({ updatedAt: -1 });
  }

  async findOne(id: string) {
    return await this.educationModel.findById(id);
  }

  async update(id: string, updateEducationDto: UpdateEducationDto) {
    return await this.educationModel.findByIdAndUpdate(id, updateEducationDto, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.educationModel.findByIdAndDelete(id);
  }
}
