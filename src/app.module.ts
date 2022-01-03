import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { EntitiesModule } from './modules/entities/entities.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';

@Module({})
export class AppModule {
  static forRoot(dbConfig: any) {

    return {
      imports: [AuthorizationModule.forFun(), EntitiesModule.forFun(), TypeOrmModule.forRoot(dbConfig)],
      controllers: [AppController],
      providers: [        
      ],
      module: AppModule,
    };
  }
}


