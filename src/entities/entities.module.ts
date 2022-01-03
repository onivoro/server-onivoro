import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { PostRepository } from './post.repository';

const providers = [UserRepository, PostRepository];

@Module({})
export class EntitiesModule {
  static forFun() {
    return {
      imports: [TypeOrmModule.forFeature([Post, User])],
      providers: [
        ...providers        
      ],
      module: EntitiesModule,
      exports: [TypeOrmModule, ...providers]
    };
  }
}


