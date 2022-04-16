import { TimeStampTypeTransformer } from '../../../../src/entity/transformers/timeStampTypeTransformer';
import { LocalDateTime, nativeJs } from '@js-joda/core';

describe('TimeStampTypeTransformer 테스트', () => {
  it('from 은 Date 값을 넣으면 LocalDateTime 값이 나온다.', () => {
    // given
    const date = new Date(2022, 3, 17, 7, 30, 20, 1);

    // when
    const result = new TimeStampTypeTransformer().from(date);

    // then
    expect(result.toString()).toBe(
      LocalDateTime.from(nativeJs(date)).toString(),
    );
  });

  it('from 은 Null 값을 넣으면  null 값이 나온다.', () => {
    // given
    const date = null;
    // when
    const result = new TimeStampTypeTransformer().from(date);

    // then
    expect(result).toBeNull();
  });
});
