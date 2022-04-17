import { Module } from '@nestjs/common';
import { getTestDBConnectionModule } from './entity/getTestDBConnectionModule';
import { MainPageModule } from './module/mainPage/MainPageModule';
import { BlogModule } from './module/blog/BlogModule';

@Module({
  imports: [getTestDBConnectionModule(), MainPageModule, BlogModule],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
