import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';
import { Task, TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvModule],
      useFactory: async (envService: EnvService) => ({
        uri: envService.serverEnv.DB_URL,
      }),
      inject: [EnvService],
    }),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
