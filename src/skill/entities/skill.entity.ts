import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from 'src/utilities/base.schema';

@Schema({ timestamps: true })
export class Skill extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop()
  imgSrc: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
