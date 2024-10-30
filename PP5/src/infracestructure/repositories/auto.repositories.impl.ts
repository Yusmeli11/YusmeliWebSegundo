import { Auto } from '../../data/postrgress/entities/auto.entity'; 
import { CreateAutoDto,UpdateAutoDto } from '../../domain/dtos';
import { AutoDatasource } from '../../domain/datasources/auto.dataosurce';
import { AutoEntity } from '../../domain/entities/auto.entity'; 
import { AppDataSource } from '../../data/postrgress'; 
import { AutoRepository } from '../../domain/use-cases';

export class AutoRepositoryImpl implements AutoRepository {
    constructor(private readonly datasource: AutoDatasource) {}

    create(createAutoDto: CreateAutoDto): Promise<AutoEntity> {
        return this.datasource.create(createAutoDto);
    }

    getAll(): Promise<AutoEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<AutoEntity> {
        return this.datasource.findById(id);
    }

    updateById(updateAutoDto: UpdateAutoDto): Promise<AutoEntity> {
        return this.datasource.updateById(updateAutoDto);
    }

    deleteById(id: number): Promise<AutoEntity> {
        return this.datasource.deleteById(id);
    }
}
