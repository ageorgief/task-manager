import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from '../database/schemas/task.schema';
import { TaskService } from './task.service';
import { CreateTaskDTO } from './task.dto';
import {} from 'node:dns';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => Task)
  async getUserById(@Args('id', { type: () => String }) id: string) {
    return this.taskService.getTask(id);
  }

  @Mutation(() => Task)
  async createTask(@Args('createTask') createTaskDTO: CreateTaskDTO) {
    return this.taskService.createTask(createTaskDTO);
  }
}
