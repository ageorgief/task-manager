import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from './env.types';

@Injectable()
export class EnvService {
  public readonly serverEnv: Env;

  constructor(private configService: ConfigService) {
    this.serverEnv = {
      PORT: this.configService.get<number>('PORT'),
      DB_URL: this.configService.get<string>('DB_URL'),
    };
  }
}
