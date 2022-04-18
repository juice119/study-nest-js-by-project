import { BlogEntity } from '../../../entity/domain/blog/Blog.entity';

export class WriteBlogParameter {
  private _title: string;
  private _body: string;

  constructor(title: string, body: string) {
    this._title = title;
    this._body = body;
  }

  getBlogEntity(): BlogEntity {
    const blogEntity = new BlogEntity();
    blogEntity.title = this.title;
    blogEntity.body = this._body;
    return blogEntity;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }
}
