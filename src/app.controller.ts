import { Body, Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    const now = new Date().toISOString();
    console.log(now);
    return {now};
  }

  @Put()
  put(@Body() body: any) {
    console.log('request body', body, new Date().toISOString());
    const res = {requestBody: body};
    console.log(res);
    return res;
  }
}
