import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from 'src/utilities/base.schema';

@Schema({ timestamps: true })
export class Education extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  field: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  imgSrc: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
