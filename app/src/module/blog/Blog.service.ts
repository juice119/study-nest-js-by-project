import { Injectable } from '@nestjs/common';
import { BlogEntity } from '../../entity/domain/blog/Blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WriteBlogParameter } from './dto/WriteBlogParameter';
import { BlogItemDto } from './dto/BlogItemDto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}

  async writeBlog(
    writeBlogParameter: WriteBlogParameter,
  ): Promise<BlogItemDto> {
    const saveBlogEntity = await this.blogRepository.save(
      writeBlogParameter.getBlogEntity(),
    );
    return BlogItemDto.byBlog(saveBlogEntity);
  }
}
