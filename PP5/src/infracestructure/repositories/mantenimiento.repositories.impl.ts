import { Mantenimiento } from '../../data/postrgress/entities/mantenimiento.entity'; 
import { CreateMantenimientoDto,UpdateMantenimientoDto } from '../../domain/dtos';
import { MantenimientoDatasource } from '../../domain/datasources/mantenimiento.datasource';
import { MantenimientoEntity } from '../../domain/entities/mantenimiento.entity'; 
import { AppDataSource } from '../../data/postrgress'; 
import { MantenimientoRepository } from '../../domain/repositories/mantenimiento.repository';

export class MantenimientoRepositoryImpl implements MantenimientoRepository {
    constructor(private readonly datasource: MantenimientoDatasource) {}

    create(createMantenimientoDto: CreateMantenimientoDto): Promise<MantenimientoEntity> {
        return this.datasource.create(createMantenimientoDto);
    }

    getAll(): Promise<MantenimientoEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<MantenimientoEntity> {
        return this.datasource.findById(id);
    }

    updateById(updateMantenimientoDto: UpdateMantenimientoDto): Promise<MantenimientoEntity> {
        return this.datasource.updateById(updateMantenimientoDto);
    }

    deleteById(id: number): Promise<MantenimientoEntity> {
        return this.datasource.deleteById(id);
    }
}
