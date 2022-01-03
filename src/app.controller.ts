import { Body, Controller, Get, Put } from '@nestjs/common';
import { UserService } from './entities/user.service';


@Controller()
export class AppController {
  constructor(
    // @InjectConnection() private readonly connection: Connection,
    private readonly svc: UserService) { }

  @Get()
  async get() {
    const now = new Date().toISOString();
    console.log(now);
    const posts = await this.svc.getUsers();
    return { now, posts };
  }

  @Put()
  async put(@Body() body: any) {
    return await this.svc.creatUser(body);
  }
}
