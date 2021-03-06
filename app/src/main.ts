import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './ApplicationModule';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(7000);
}
bootstrap();
