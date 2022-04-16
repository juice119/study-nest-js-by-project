import { Module } from '@nestjs/common';
import { getTestDBConnectionModule } from './entity/getTestDBConnectionModule';
import { MainPageModule } from './modules/mainPage/MainPageModule';

@Module({
  imports: [getTestDBConnectionModule(), MainPageModule],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
