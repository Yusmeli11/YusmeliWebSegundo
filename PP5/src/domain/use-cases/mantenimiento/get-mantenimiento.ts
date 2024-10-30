import { MantenimientoEntity } from '../../entities/mantenimiento.entity';
import { MantenimientoRepository } from '../../repositories/mantenimiento.repository';

export interface GetMantenimientoUseCase {
    execute(id: number): Promise<MantenimientoEntity>;
  }
  
  export class GetAprendizaje implements GetMantenimientoUseCase {
    
    constructor(
      private readonly repository: MantenimientoRepository,
    ) {}
    
    execute(id: number): Promise<MantenimientoEntity> {
      return this.repository.findById(id);
    }
  }
  
  
  