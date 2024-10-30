import { MantenimientoService } from './mantenimiento.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
export declare class MantenimientoController {
    private readonly MantenimientoService;
    constructor(mantenimientoService: MantenimientoService);
    create(createMantenimientoDto: CreateMantenimientoDto): import("./entities/mantenimiento.entity").Mantenimiento;
    findAll(): Promise<import("./entities/mantenimiento.entity").Mantenimiento[]>;
    findOne(id: string): Promise<import("./entities/mantenimiento.entity").Mantenimiento>;
    update(id: string, updateConceptoDto: UpdateMantenimientoDto): Promise<import("./entities/mantenimiento.entity").Mantenimiento>;
    remove(id: string): Promise<import("./entities/mantenimiento.entity").Mantenimiento>;
}

