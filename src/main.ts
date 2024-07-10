import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestApplicationOptions } from '@nestjs/common';


async function bootstrap() {
  const options: NestApplicationOptions = {
    bodyParser: false
  }

  const app = await NestFactory.create(AppModule, options);
  await app.listen(3000);
}
bootstrap();
