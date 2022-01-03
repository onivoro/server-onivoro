import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { createConnection } from 'typeorm';
// import { createConnection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { Post } from './entities/post.entity';
// import { User } from './entities/user.entity';

@Module({})
export class AppModule {
  static forRoot(dbConfig: any) {
    return {
      imports: [TypeOrmModule.forRoot({...dbConfig})],
      controllers: [AppController],
      providers: [
        AppService,        
        // {
        //   provide: 'DATABASE_CONNECTION',
        //   useFactory: async () => await createConnection(dbConfig),
        // },
      ],
      module: AppModule,
      // exports: [TypeOrmModule]
    };
  }
}


