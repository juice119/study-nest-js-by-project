import { IdTransformer } from '../../../../src/entity/transformers/IdTransformer';

describe('IdTransformer 테스트를 수행합니다.', () => {
  it('IdTransformer from 은 String 이 오면 number 은 내보낸다.', () => {
    // given
    const fromValue = '12345678';

    // when
    const from = new IdTransformer().from(fromValue);

    // then
    expect(from).toBe(12345678);
  });

  it('IdTransformer from 은 null 이 오면 null 을 내보낸다.', () => {
    // given
    const fromValue = null;

    // when
    const from = new IdTransformer().from(fromValue);

    // then
    expect(from).toBeNull();
  });

  it('IdTransformer from 은 그이외에 타입 이 오면 그대로 내보낸다.', () => {
    // given
    const fromValue = { a: 1 };

    // when
    const from = new IdTransformer().from(fromValue);

    // then
    expect(from).toStrictEqual(fromValue);
  });
});
