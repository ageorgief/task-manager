import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'users' })
@Schema({ collection: 'tasks', timestamps: true })
export class Task extends Document {
  @Field(() => ID)
  _id: Types.ObjectId;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({ required: true })
  status: string;

  @Field()
  @Prop({ required: true })
  dueDate: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
