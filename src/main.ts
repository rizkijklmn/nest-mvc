// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { withJsxEngine } from './jsx.engine';
import Layout from './views/Layout';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  withJsxEngine(app, Layout); // aktifkan JSX engine
  await app.listen(3000);
}
bootstrap();
