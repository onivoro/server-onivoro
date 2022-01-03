import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { EntitiesModule } from './entities/entities.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';

@Module({
  imports: [AuthorizationModule]
})
export class AppModule {
  static forRoot(dbConfig: any) {
    return {
      imports: [TypeOrmModule.forRoot(dbConfig), EntitiesModule.forFun()],
      controllers: [AppController],
      providers: [        
      ],
      module: AppModule,
    };
  }
}


