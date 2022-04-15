import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';
import { LocalDateTime } from '@js-joda/core';

export class TimeStampTypeTransformer implements ValueTransformer {
  from(value: LocalDateTime): LocalDateTime {
    return value;
  }

  to(value: Date): LocalDateTime {
    return LocalDateTime.of(
      value.getFullYear(),
      value.getMonth(),
      value.getDay(),
      value.getHours(),
      value.getMinutes(),
      value.getSeconds(),
    );
  }
}
