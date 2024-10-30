import { UpdateMantenimientoDto } from '../../dtos';
import { MantenimientoEntity } from '../../entities/mantenimiento.entity';
import { MantenimientoRepository } from '../../repositories/mantenimiento.repository';

export interface UpdateMantenimientoUseCase {
    execute(dto: UpdateMantenimientoDto): Promise<MantenimientoEntity>;
  }
  
  export class UpdateMantenimiento implements UpdateMantenimientoUseCase {
    
    constructor(
      private readonly repository: MantenimientoRepository,
    ) {}
    
    execute(dto: UpdateMantenimientoDto): Promise<MantenimientoEntity> {
      return this.repository.updateById(dto);
    }
  }
  