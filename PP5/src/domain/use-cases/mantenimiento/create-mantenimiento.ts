import { CreateMantenimientoDto } from '../../dtos';
import { MantenimientoEntity } from '../../entities/mantenimiento.entity';
import { MantenimientoRepository } from '../../repositories/mantenimiento.repository';

export interface CreateMantenimientoUseCase {
  execute(dto: CreateMantenimientoDto): Promise<MantenimientoEntity>;
}

export class createMantenimiento implements CreateMantenimientoUseCase {
  
  constructor(
    private readonly repository: MantenimientoRepository,
  ) {}
  
  execute(dto: CreateMantenimientoDto): Promise<MantenimientoEntity> {
    return this.repository.create(dto);
  }
}


