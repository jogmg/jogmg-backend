import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WorkExperience,
  WorkExperienceSchema,
} from './entities/work-experience.entity';
import { WorkExperienceController } from './work-experience.controller';
import { WorkExperienceService } from './work-experience.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WorkExperience.name,
        schema: WorkExperienceSchema,
      },
    ]),
  ],
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService],
})
export class WorkExperienceModule {}
