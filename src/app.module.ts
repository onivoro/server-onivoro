import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { createConnection } from 'typeorm';
import { AppController } from './app.controller';
import { EntitiesModule } from './entities/entities.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [AuthorizationModule, DatabaseModule]
})
export class AppModule {
  static forRoot(dbConfig: any) {
    return {
      imports: [TypeOrmModule.forRoot(dbConfig), EntitiesModule.forFun()],
      controllers: [AppController],
      providers: [
        // {
        //   provide: 'DATABASE_CONNECTION',
        //   useFactory: async () => await createConnection(dbConfig),
        // },
      ],
      module: AppModule,
    };
  }
}


