import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const InitializeSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Home App API')
    .setDescription(
      'API documentation for Home App Backend - Managing properties, people, and users',
    )
    .setVersion('1.0')
    .addTag('auth', 'Authentication endpoints')
    .addTag('users', 'User management endpoints')
    .addTag('properties', 'Property management endpoints')
    .addTag('people', 'People management endpoints')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
      },
      'jwt',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

export const LogSwaggerInitialization = (port: number) => {
  console.log(
    `Swagger documentation available at: http://localhost:${port}/api`,
  );
};
