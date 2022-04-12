import { getTestDBConnectionModule } from '../src/getTestDBConnectionModule';
import { Test } from '@nestjs/testing';

describe('getTestDBConnectionModule.ts', () => {
  it('데이터 베이스 연결 성공 확인', async () => {
    await Test.createTestingModule({
      imports: [getTestDBConnectionModule()],
    });
  });
});
