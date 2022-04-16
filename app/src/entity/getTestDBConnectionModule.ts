import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const MAX_QUERY_EXECUTION_SECOND = 10;

export function getTestDBConnectionModule(): DynamicModule {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'back-end-server',
    password: 'test1234',
    database: 'blog',
    entities: ['dist/entity/domain/**/*.entity{.js, .ts}'],

    // 라이브에서는 끄기
    synchronize: true,

    logging: 'all',
    maxQueryExecutionTime: MAX_QUERY_EXECUTION_SECOND * 1000,

    //TODO 데이터 베이스 connection 만들기
  });
}
