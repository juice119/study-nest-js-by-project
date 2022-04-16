import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';
import { LocalDateTime, nativeJs } from '@js-joda/core';

export class TimeStampTypeTransformer implements ValueTransformer {
  from(value: Date): LocalDateTime | null {
    if (!value) return null;

    return LocalDateTime.from(nativeJs(value));
  }

  to(value: LocalDateTime): any {
    return value;
  }
}
