import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.enableCors({
    origin: ['http://localhost:3001'],
    methods: ['GET', 'POST'],
  });
  await app.listen(3009);
}
bootstrap();
