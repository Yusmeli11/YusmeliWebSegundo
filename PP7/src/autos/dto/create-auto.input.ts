import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAutoInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  descripcion!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  placa!: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  color!: string;
}
