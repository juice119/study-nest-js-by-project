import { Controller, Get } from '@nestjs/common';
import { BlogListDto } from './dto/BlogListDto';

@Controller({ path: 'blog' })
export class BlogController {
  @Get('/')
  getList(): BlogListDto {
    return new BlogListDto();
  }
}
