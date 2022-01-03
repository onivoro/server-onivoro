import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserRepository } from './entities/user.repository';


@Controller()
export class AppController {
  constructor(
    private readonly svc: UserRepository) { }

  @Get()
  async get() {
    return await this.svc.get();
  }

  @Put()
  async put(@Body() body: any) {
    return await this.svc.put([body]);
  }

  @Post()
  async post(@Body() body: any) {    
    return await this.svc.post([body]);
  }
}
