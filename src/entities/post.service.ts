import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService implements OnModuleInit {
  repository: Repository<Post>;
  constructor(@InjectConnection() private readonly connection: Connection) { }

  async onModuleInit() {
    this.repository = this.connection.getRepository(Post);
  }

  async creatPost(post: Partial<Post>) {

    const p = this.repository.create({
      ...post,
      elements: [{
        tagName: 'h1',
        props: { textContent: 'hi there ' + new Date().toISOString() }
      }]
    });
    console.log(p);
    return await this.repository.save(p);
  }

  async getPosts() {
    return await this.repository.find();
  }
}
