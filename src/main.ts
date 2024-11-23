// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('Real Estate API')
    .setDescription('API for managing real estate listings')
    .setVersion('1.0')
    .addTag('listings')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);






  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();