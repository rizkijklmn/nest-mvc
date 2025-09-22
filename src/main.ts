// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { withJsxEngine } from './jsx.engine';
import Layout from './views/Layout';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"));

  withJsxEngine(app, Layout); // aktifkan JSX engine
  await app.listen(3000);
}
bootstrap();
