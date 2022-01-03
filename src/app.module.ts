import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { EntitiesModule } from './modules/entities/entities.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { authConfig } from './configs/auth.config';

@Module({})
export class AppModule {
  static forRoot(dbConfig: any) {

    return {
      imports: [
        AuthorizationModule.forRoot(authConfig),
        EntitiesModule.forFun(),
        TypeOrmModule.forRoot(dbConfig)],
      controllers: [AppController],
      module: AppModule,
    };
  }
}


