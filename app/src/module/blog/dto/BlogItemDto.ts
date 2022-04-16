import { LocalDateTime } from '@js-joda/core';
import { BlogEntity } from '../../../entity/domain/blog/Blog.entity';

export class BlogItemDto {
  private readonly _id: number;
  private readonly _title: string;
  private readonly _body: string;
  private _createdAt: LocalDateTime;

  constructor(
    id: number,
    title: string,
    body: string,
    createdAt: LocalDateTime,
  ) {
    this._id = id;
    this._title = title;
    this._body = body;
    this._createdAt = createdAt;
  }

  static byBlog(blogEntity: BlogEntity) {
    return new BlogItemDto(
      blogEntity.id,
      blogEntity.title,
      blogEntity.body,
      blogEntity.createdAt,
    );
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get body(): string {
    return this._body;
  }

  get createdAt(): string {
    return this._createdAt.toString();
  }
}
