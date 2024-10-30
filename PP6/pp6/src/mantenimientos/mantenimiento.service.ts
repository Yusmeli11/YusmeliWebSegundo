import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
import { Mantenimiento } from './entities/mantenimiento.entity';
import { Repository } from 'typeorm';
export declare class MantenimientoService {
    private MantenimientoRepository;
    constructor(MantenimientoRepository: Repository<Mantenimiento>);
    create(createManyenimientoDto: CreateMantenimientoDto): Mantenimiento
    findAll(): Promise<Mantenimiento[]>;
    findOne(id: number): Promise<Mantenimiento>;
    update(id: number, updateCajaDto: UpdateMantenimientoDto): Promise<Mantenimiento>;
    remove(id: number): Promise<Mantenimiento>;
}
