import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './modules/env/env.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  const envService = app.get(EnvService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      errorHttpStatusCode: 422,
    }),
  );

  const port = envService.serverEnv.PORT || 3000;

  await app.listen(port);
}
bootstrap();
