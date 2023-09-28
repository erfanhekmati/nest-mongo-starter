import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerIntialize } from './swagger';


async function bootstrap() {
  // Creating Application
  const app = await NestFactory.create(AppModule);

  // Get configuration service from app
  const configService = app.get(ConfigService);

  // Setup Swagger
  SwaggerIntialize(app);

  // Global Validation pipe is added
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Listening on retrieved port
  await app.listen(configService.get("app.port"));

  // Logging listening message
  Logger.log(`App is listening on port ${configService.get("app.port")} ...`, 'Bootstrap');
}
bootstrap();
