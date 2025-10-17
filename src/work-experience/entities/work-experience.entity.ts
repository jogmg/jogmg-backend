import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from 'src/utilities/base.schema';

@Schema({ timestamps: true })
export class WorkExperience extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  date: string;

  @Prop()
  imgSrc: string;

  @Prop({ required: true })
  descs: string[];
}

export const WorkExperienceSchema = SchemaFactory.createForClass(WorkExperience);
