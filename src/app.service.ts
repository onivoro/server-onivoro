import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    console.log('what is going on here?')
  }
  getHello(): string {
    return 'Hello World!';
  }
}
