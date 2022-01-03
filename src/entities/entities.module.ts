import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { createConnection } from 'typeorm';
import { Post } from './post.entity';
import { User } from './user.entity';

@Module({})
export class EntitiesModule {
  static forFun() {
    return {
      imports: [TypeOrmModule.forFeature([Post, User])],
      providers: [
        // {
        //   provide: 'DATABASE_CONNECTION',
        //   useFactory: async () => await createConnection(dbConfig),
        // },
      ],
      module: EntitiesModule,
      exports: [TypeOrmModule]
    };
  }
}


