import { NestFactory } from '@nestjs/core';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();

const dbConfig: PostgresConnectionOptions & {autoLoadEntities: boolean} = {
  autoLoadEntities: true,
  database: process.env.DATABASE,
  host: process.env.DBHOST,
  port: +(process.env.DBPORT || 5432),
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  synchronize: process.env.DBSYNC === 'true',
  type: 'postgres',
  namingStrategy: new SnakeNamingStrategy(),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(dbConfig));
  app.enableShutdownHooks();
  await app.listen(process.env.PORT);
}
bootstrap();
