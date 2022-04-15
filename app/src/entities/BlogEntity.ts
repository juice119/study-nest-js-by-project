import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocalDateTime } from '@js-joda/core';
import { IdTransformer } from '../libs/src/transformers/IdTransformer';
import { TimeStampTypeTransformer } from '../libs/src/transformers/timeStampTypeTransformer';

@Entity({ name: 'blog' })
export class BlogEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Column({ transformer: new IdTransformer() })
  id: BigInteger;

  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'text' })
  body: string;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
    update: false,
    transformer: new TimeStampTypeTransformer(),
  })
  createdAt: LocalDateTime;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
    transformer: new TimeStampTypeTransformer(),
  })
  updatedAt: LocalDateTime;

  @BeforeInsert()
  protected beforeInsert() {
    this.createdAt = LocalDateTime.now();
    this.updatedAt = LocalDateTime.now();
  }

  @BeforeUpdate()
  protected beforeUpdate() {
    this.updatedAt = LocalDateTime.now();
  }
}
