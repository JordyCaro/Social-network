import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as crypto from 'crypto';

async function bootstrap() {
  config(); // Cargar variables de entorno desde .env

  // Generar una clave aleatoria si no está configurada
  if (!process.env.JWT_SECRET) {
    const generatedSecret = crypto.randomBytes(32).toString('hex');
    console.log(`Generated JWT secret: ${generatedSecret}`);
    process.env.JWT_SECRET = generatedSecret;
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
