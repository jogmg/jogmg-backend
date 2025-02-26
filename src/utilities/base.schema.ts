import mongoose from 'mongoose';

export class BaseSchema {
  _id?: mongoose.Types.ObjectId | string;
  createdAt?: Date;
  updatedAt?: Date;
}
