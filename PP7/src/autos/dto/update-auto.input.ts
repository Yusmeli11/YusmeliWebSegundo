import { CreateAutoInput } from './create-auto.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAutoInput extends PartialType(CreateAutoInput) {
  @Field(() => ID)
  id!: number;
}
