import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';

export class IdTransformer implements ValueTransformer {
  from(value: any): any {
    return value;
  }

  to(value: any): any {
    return value;
  }
}
