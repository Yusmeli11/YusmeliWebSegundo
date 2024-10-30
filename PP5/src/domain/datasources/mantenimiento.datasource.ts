import { CreateMantenimientoDto, UpdateMantenimientoDto } from '../dtos';
import { MantenimientoEntity } from '../entities/mantenimiento.entity';

export abstract class MantenimientoDatasource {

  abstract create(createAprendizajeDto: CreateMantenimientoDto): Promise<MantenimientoEntity>;
  abstract getAll(): Promise<MantenimientoEntity[]>;
  abstract findById(id: number): Promise<MantenimientoEntity>;
  abstract updateById(updateAutoDto: UpdateMantenimientoDto): Promise<MantenimientoEntity>;
  abstract deleteById(id: number): Promise<MantenimientoEntity>;

}
