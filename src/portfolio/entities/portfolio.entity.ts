import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from 'src/utilities/base.schema';

export interface IDesc {
  title: string;
  text: string;
}

@Schema({ timestamps: true })
export class Portfolio extends BaseSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  bgUrl: string;

  @Prop({ required: true })
  mainUrl: string;

  @Prop({ required: true })
  ctaUrl: string;

  @Prop({ required: true })
  ctaType: string;

  @Prop({ required: true })
  descs: IDesc[];
}

export const PorfolioSchema = SchemaFactory.createForClass(Portfolio);
