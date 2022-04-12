import { NestFactory } from '@nestjs/core';
import { MainPageModule } from './module/mainPage/MainPageModule';

async function bootstrap() {
  const app = await NestFactory.create(MainPageModule);
  await app.listen(7000);
}
bootstrap();
