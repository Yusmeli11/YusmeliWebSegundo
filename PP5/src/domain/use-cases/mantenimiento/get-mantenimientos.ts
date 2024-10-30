import { MantenimientoEntity } from '../../entities/mantenimiento.entity';
import { MantenimientoRepository } from '../../repositories/mantenimiento.repository';

export interface GetMantenimientosUseCase {
    execute(): Promise<MantenimientoEntity[]>;
  }
  
  export class GetMantenimientos implements GetMantenimientosUseCase {
    
    constructor(
      private readonly repository: MantenimientoRepository,
    ) {}
    
    execute(): Promise<MantenimientoEntity[]> {
      return this.repository.getAll();
    }
  }
  
  