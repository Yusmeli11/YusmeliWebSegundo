import { CreateMantenimientoDto, UpdateMantenimientoDto } from '../dtos';
import { MantenimientoEntity } from '../entities/mantenimiento.entity';

export abstract class MantenimientoRepository {

  abstract create(createMantenimientoDto: CreateMantenimientoDto): Promise<MantenimientoEntity>;
  abstract getAll(): Promise<MantenimientoEntity[]>;
  abstract findById(id: number): Promise<MantenimientoEntity>;
  abstract updateById(updateMantenimientoDto: UpdateMantenimientoDto): Promise<MantenimientoEntity>;
  abstract deleteById(id: number): Promise<MantenimientoEntity>;

}
