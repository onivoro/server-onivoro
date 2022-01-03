import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createConnection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({})
export class AppModule {
  static forRoot(dbConfig) {
    return {
      imports: [TypeOrmModule.forRoot(dbConfig)],
      controllers: [AppController],
      providers: [
        AppService,        
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: async () => await createConnection(dbConfig),
        },
      ],
    };
  }
}


