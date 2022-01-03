import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { createConnection } from 'typeorm';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { User } from './user.entity';
import { UserService } from './user.service';
const providers = [PostService, UserService];
@Module({})
export class EntitiesModule {
  static forFun() {
    return {
      imports: [TypeOrmModule.forFeature([Post, User])],
      providers: [
        ...providers
        // {
        //   provide: 'DATABASE_CONNECTION',
        //   useFactory: async () => await createConnection(dbConfig),
        // },
      ],
      module: EntitiesModule,
      exports: [TypeOrmModule, ...providers]
    };
  }
}


