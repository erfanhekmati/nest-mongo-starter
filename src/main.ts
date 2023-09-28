import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // Creating Application
  const app = await NestFactory.create(AppModule);

  // Listening to a port
  await app.listen(3000);

  // Logging listening message
  Logger.log(`App is listening on port ${3000} ...`, 'Bootstrap')
}
bootstrap();
