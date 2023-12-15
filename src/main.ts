import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.setGlobalPrefix('api');
  app.enableCors();
  app.enableShutdownHooks();

  app.useStaticAssets(path.join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', 
    index: false, 
  });

  await app.listen(8000, '0.0.0.0');
}
bootstrap();
