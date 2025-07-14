import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { isInstance } from 'class-validator';
import { AppModule } from './app.module';

//Reloader Function
async function reloadWebsite() {
  const today = new Date().toISOString();

  try {
    const response = await fetch('https://jogmg-backend.onrender.com');
    console.log(`Reloaded at ${today}: Status Code ${response.status}`);
  } catch (error) {
    console.error(
      `Error reloading at ${today}:`,
      isInstance(error, Error) ? error.message : 'Unknown error',
    );
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 5000);
  // setInterval(reloadWebsite, (60 * 60 * 1000));
  setInterval(reloadWebsite, 30000);
}

bootstrap();
