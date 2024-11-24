import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateConceptoInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  descripcion!: string;
}
