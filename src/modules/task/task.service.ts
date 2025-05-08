import { Injectable, Logger } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { CreateTaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private readonly taskRepository: TaskRepository) {}

  async getTask(id: string) {
    return this.taskRepository.findByID(id);
  }

  async createTask(taskDTO: CreateTaskDTO) {
    return this.taskRepository.createTask(taskDTO);
  }

  async deleteTask(id: string) {
    return this.taskRepository.deleteTask(id);
  }
}
