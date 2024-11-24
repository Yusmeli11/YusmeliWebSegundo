import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptoResolver } from './concepto.resolver';
import { ConceptoService } from './concepto.service';
import { Concepto } from './entities/concepto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Concepto])],
  providers: [ConceptoResolver, ConceptoService],
})
export class ConceptoModule {}
