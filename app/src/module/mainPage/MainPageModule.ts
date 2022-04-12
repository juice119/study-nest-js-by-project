import { Module } from '@nestjs/common';
import { MainPageController } from './MainPageController';
import { HelloWorldService } from './service/HelloWorldService';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [MainPageController],
  providers: [HelloWorldService],
})
export class MainPageModule {}
