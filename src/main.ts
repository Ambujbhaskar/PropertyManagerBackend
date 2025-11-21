import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { Request, Response, NextFunction } from 'express';
import { InitializeSwagger, LogSwaggerInitialization } from '../docs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.use((req: Request, res: Response, next: NextFunction) =>
    new LoggerMiddleware().use(req, res, next),
  );
  app.enableCors({
    origin: '*', // Allow all origins (for development)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  InitializeSwagger(app);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  LogSwaggerInitialization(port as number);
}
bootstrap().catch((err) => {
  console.error('Error during application bootstrap:', err);
  process.exit(1);
});
