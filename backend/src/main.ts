import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app.module';
import * as dotenv from 'dotenv';

const envFilePath = `.env.${process.env.NODE_ENV || 'dev'}`;
dotenv.config({ path: envFilePath });

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
