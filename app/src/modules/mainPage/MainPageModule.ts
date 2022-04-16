import { Module } from '@nestjs/common';
import { MainPageController } from './MainPageController';
import { MainPageService } from './MainPageService';
import { BlogEntityModule } from '../../entities/blog/BlogEntityModule';

@Module({
  imports: [BlogEntityModule],
  controllers: [MainPageController],
  providers: [MainPageService],
})
export class MainPageModule {}
