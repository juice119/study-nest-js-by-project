import { BlogService } from '../../../../src/module/blog/Blog.service';
import { Test } from '@nestjs/testing';
import { WriteBlogParameter } from '../../../../src/module/blog/dto/WriteBlogParameter';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BlogEntity } from '../../../../src/entity/domain/blog/Blog.entity';
import { repositoryMockFactory } from '../../../util/repositoryMockFactory';
import { repositoryMockFactoryForThrow } from '../../../util/repositoryMockFactoryForThrow';

describe('blogService 테스트를 수행합니다.', () => {
  let blogService: BlogService;

  describe('repository Error 가 발생하지 않을때', () => {
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          BlogService,
          {
            provide: getRepositoryToken(BlogEntity),
            useFactory: repositoryMockFactory,
          },
        ],
      }).compile();

      blogService = moduleRef.get<BlogService>(BlogService);
    });
    it('write Blog 는 정상적으로 글을 쓴 값을 내보낸다.', async () => {
      // given
      const title = 'testTitle';
      const body = 'testBody';
      const writeBlogParameter = new WriteBlogParameter(title, body);

      // when
      const result = await blogService.writeBlog(writeBlogParameter);

      //then
      expect(result.title).toBe(writeBlogParameter.title);
      expect(result.body).toBe(writeBlogParameter.body);
    });
  });

  describe('repository Exception 이 발생하였을때', () => {
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        providers: [
          BlogService,
          {
            provide: getRepositoryToken(BlogEntity),
            useFactory: repositoryMockFactoryForThrow,
          },
        ],
      }).compile();

      blogService = moduleRef.get<BlogService>(BlogService);
    });

    it('write Blog 는 에러 발생시 커스텀 에러를 제작한다.', async () => {
      // given
      const title = 'testTitle';
      const body = 'testBody';
      const writeBlogParameter = new WriteBlogParameter(title, body);

      //when
      const actual = async () => {
        await blogService.writeBlog(writeBlogParameter);
      };

      //then
      await expect(actual).rejects.toThrow();
    });
  });
});
