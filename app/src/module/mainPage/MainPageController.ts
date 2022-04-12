import { Controller, Get } from '@nestjs/common';
import { HelloWorldService } from './service/HelloWorldService';

@Controller()
export class MainPageController {
  constructor(private readonly appService: HelloWorldService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
