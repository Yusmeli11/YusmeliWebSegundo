import { CreateConceptoDto, UpdateConceptoDto } from '../dtos';
import { ConceptoEntity } from '../entities/concepto.entity';

export abstract class ConceptoDatasource {

  abstract create(createAprendizajeDto: CreateConceptoDto): Promise<ConceptoEntity>;
  abstract getAll(): Promise<ConceptoEntity[]>;
  abstract findById(id: number): Promise<ConceptoEntity>;
  abstract updateById(updateAutoDto: UpdateConceptoDto): Promise<ConceptoEntity>;
  abstract deleteById(id: number): Promise<ConceptoEntity>;

}
