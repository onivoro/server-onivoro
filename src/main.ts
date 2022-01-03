import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
config();

import { AppModule } from './app.module';
import { dbConfig } from './configs/db.config';
const port = process.env.PORT || 3336;
console.log(port, dbConfig);
async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(dbConfig));
  app.enableShutdownHooks();
  await app.listen(port);
}
bootstrap();
