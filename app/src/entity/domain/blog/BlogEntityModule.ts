import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './Blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity])],
  exports: [TypeOrmModule],
})
export class BlogEntityModule {}
