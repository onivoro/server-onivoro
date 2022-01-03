import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
config();
import { AppModule } from './app.module';
import { dbConfig } from './configs/db.config';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule.forRoot(dbConfig));
  app.enableShutdownHooks();
  await app.listen(port);
}
bootstrap();
