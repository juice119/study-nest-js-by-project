import { Injectable } from '@nestjs/common';
import { BlogEntity } from '../../entity/domain/blog/Blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WriteBlogParameter } from './dto/WriteBlogParameter';
import { BlogItemDto } from './dto/BlogItemDto';

@Injectable()
export class BlogService {
  public static DATABASE_ERROR_MESSAGE = '시스템에 문제가 발생하였습니다.';

  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}

  async writeBlog(
    writeBlogParameter: WriteBlogParameter,
  ): Promise<BlogItemDto> {
    try {
      const saveBlogEntity = await this.blogRepository.save(
        writeBlogParameter.getBlogEntity(),
      );
      return BlogItemDto.byBlog(saveBlogEntity);
    } catch (e) {
      console.error(e);
      throw new Error(BlogService.DATABASE_ERROR_MESSAGE);
    }
  }
}
