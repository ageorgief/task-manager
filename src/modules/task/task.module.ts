import { Module } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { TaskRepository } from './task.repository';
import { DatabaseModule } from '../database/database.module';
import { TaskService } from './task.service';

@Module({
  imports: [DatabaseModule],
  providers: [TaskResolver, TaskService, TaskRepository],
  exports: [TaskResolver],
})
export class TaskModule {}
