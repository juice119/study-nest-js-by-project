import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';

export class IdTransformer implements ValueTransformer {
  from(value: any): any {
    const parseNumber = parseInt(value);
    return parseNumber ? parseNumber : value;
  }

  to(value: any): any {
    return value;
  }
}
