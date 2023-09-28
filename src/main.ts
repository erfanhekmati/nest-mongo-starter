import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerIntialize } from './swagger';


async function bootstrap() {
  // Creating Application
  const app = await NestFactory.create(AppModule);

  // Get configuration service from app
  const configService = app.get(ConfigService);

  // Setup Swagger
  SwaggerIntialize(app);

  // Listening on retrieved port
  await app.listen(configService.get("app.port"));

  // Logging listening message
  Logger.log(`App is listening on port ${configService.get("app.port")} ...`, 'Bootstrap');
}
bootstrap();
