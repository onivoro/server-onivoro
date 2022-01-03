import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService implements OnModuleInit {
  repository: Repository<User>;
  constructor(@InjectConnection() private readonly connection: Connection) { }

  async onModuleInit() {
    this.repository = this.connection.getRepository(User);
  }

  async creatUser(data: Partial<User['data']>) {

    const p = this.repository.create({
      data
    });
    console.log(p);
    return await this.repository.save(p);
  }

  async getUsers() {
    return await this.repository.find();
  }
}
