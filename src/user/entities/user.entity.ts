import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../../utilities/base.schema';

@Schema({ timestamps: true })
export class User extends BaseSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  subject: string;

  @Prop({ required: true })
  message: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
