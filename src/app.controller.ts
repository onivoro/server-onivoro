import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserRepository } from './modules/entities/user.repository';


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

  @Delete()
  async delete() {    
    const ids = (await this.svc.get()).map(u => u.id);
    return await this.svc.delete(ids);
  }
}
