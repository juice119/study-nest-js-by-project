import { Module } from '@nestjs/common';
import { BlogEntityModule } from '../../entity/domain/blog/BlogEntityModule';
import { BlogController } from './Blog.controller';

@Module({
  imports: [BlogEntityModule],
  controllers: [BlogController],
  providers: [],
})
export class BlogModule {}
