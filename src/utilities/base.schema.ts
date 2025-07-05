import { Document } from 'mongoose';

export class BaseSchema extends Document {
  createdAt?: Date;
  updatedAt?: Date;
}
