import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './BlogEntity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity])],
})
export class BlogEntityModule {}
