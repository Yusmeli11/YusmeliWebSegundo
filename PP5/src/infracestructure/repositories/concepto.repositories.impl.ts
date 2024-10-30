import { Concepto } from '../../data/postrgress/entities/concepto.entity'; 
import { CreateConceptoDto,UpdateConceptoDto } from '../../domain/dtos';
import { ConceptoDatasource } from '../../domain/datasources/concepto.datasource';
import { ConceptoEntity } from '../../domain/entities/concepto.entity'; 
import { AppDataSource } from '../../data/postrgress'; 
import { ConceptoRepository } from '../../domain/repositories/concepto.repository';

export class ConceptoRepositoryImpl implements ConceptoRepository {
    constructor(private readonly datasource: ConceptoDatasource) {}

    create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity> {
        return this.datasource.create(createConceptoDto);
    }

    getAll(): Promise<ConceptoEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<ConceptoEntity> {
        return this.datasource.findById(id);
    }

    updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity> {
        return this.datasource.updateById(updateConceptoDto);
    }

    deleteById(id: number): Promise<ConceptoEntity> {
        return this.datasource.deleteById(id);
    }
}
