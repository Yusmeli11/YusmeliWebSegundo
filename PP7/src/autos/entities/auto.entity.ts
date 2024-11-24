import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Auto {
  @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

  @Field()
    @Column()
    descripcion!: string;

  @Field()
    @Column()
    placa!: string;

  @Field()
    @Column()
    color!: string;
}
