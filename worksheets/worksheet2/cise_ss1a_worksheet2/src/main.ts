import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as configDotenv } from 'dotenv';

async function bootstrap() {
  configDotenv();
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5001;
  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
