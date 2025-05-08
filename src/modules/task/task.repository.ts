import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from '../database/schemas/task.schema';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  async findByID(id: string) {
    return this.taskModel.findById({ _id: id });
  }

  async createTask(task: Partial<Task>) {
    return this.taskModel.create(task);
  }

  async deleteTask(id: string) {
    await this.taskModel.deleteOne({ _id: id });
  }
}
