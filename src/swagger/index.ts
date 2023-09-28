
import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


export function SwaggerIntialize(app: INestApplication<any>) {
    // Get configuration service from app
    const configService = app.get(ConfigService);

    // Creating swagger config
    const swaggerConfig = new DocumentBuilder()
      .setTitle(configService.get('swagger.title'))
      .setDescription(configService.get('swagger.description'))
      .setVersion(configService.get('app.version'))
      .build();

    // Building swagger document
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

    // Creating swagger options to sort endpoints
    const swaggerOptions = {
    swaggerOptions: {
        operationsSorter: (a, b) => {
        const methodsOrder = ["get", "post", "put", "patch", "delete", "options", "trace"];
        let result = methodsOrder.indexOf(a.get("method")) - methodsOrder.indexOf(b.get("method"));
        if (result === 0) result = a.get("path").localeCompare(b.get("path"));
        return result;
        }
    }
    };

    // setup swagger doc page with the document and options
    SwaggerModule.setup(configService.get('swagger.path'), app, swaggerDocument, swaggerOptions);
  };