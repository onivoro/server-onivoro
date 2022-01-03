import { Body, Controller, Get, Put } from '@nestjs/common';
// import { InjectConnection } from '@nestjs/typeorm';
// import { Connection } from 'typeorm';


@Controller()
export class AppController {
  // constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get()
  get() {
    const now = new Date().toISOString();
    console.log(now);
    // const qr = this.connection.createQueryRunner();
    // const result = qr.query(`select concat('hi', 'world')`);
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
