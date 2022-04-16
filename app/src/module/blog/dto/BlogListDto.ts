import { BlogItemDto } from './BlogItemDto';
import { BlogEntity } from '../../../entity/domain/blog/Blog.entity';

export class BlogListDto {
  private readonly _blogItems: BlogItemDto[] = [];

  constructor() {
    this._blogItems = [];
  }

  static byBlogEntities(blogEntities: BlogEntity[]): BlogListDto {
    const blogListDto = new BlogListDto();
    for (const blogEntity of blogEntities) {
      blogListDto.addBlogItem(BlogItemDto.byBlog(blogEntity));
    }
    return blogListDto;
  }

  addBlogItem(blogItemDto: BlogItemDto) {
    this._blogItems.push(blogItemDto);
  }

  get blogItems(): BlogItemDto[] {
    return this._blogItems;
  }
}
