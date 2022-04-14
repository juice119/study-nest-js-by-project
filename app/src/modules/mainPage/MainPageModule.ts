import { Module } from '@nestjs/common';
import { MainPageController } from './MainPageController';
import { MainPageService } from './MainPageService';

@Module({
  imports: [],
  controllers: [MainPageController],
  providers: [MainPageService],
})
export class MainPageModule {}
