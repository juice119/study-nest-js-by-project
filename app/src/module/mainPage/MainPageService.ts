import { Injectable } from '@nestjs/common';

@Injectable()
export class MainPageService {
  getHello(): string {
    return 'Hello World!';
  }
}
