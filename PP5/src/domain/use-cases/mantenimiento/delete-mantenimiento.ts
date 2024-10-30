import { MantenimientoEntity } from '../../entities/mantenimiento.entity';
import { MantenimientoRepository } from '../../repositories/mantenimiento.repository';

export interface DeleteMantenimientoUseCase {
  execute(id: number): Promise<MantenimientoEntity>;
}

export class deleteMantenimiento implements DeleteMantenimientoUseCase {
  
  constructor(
    private readonly repository: MantenimientoRepository,
  ) {}
  
  execute(id: number): Promise<MantenimientoEntity> {
    return this.repository.deleteById(id);
  }
}


