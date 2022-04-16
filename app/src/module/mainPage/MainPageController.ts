import { Controller, Get } from '@nestjs/common';
import { MainPageService } from './MainPageService';

@Controller()
export class MainPageController {
  constructor(private readonly appService: MainPageService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
