import { Mantenimiento } from '../../data/postrgress/entities/mantenimiento.entity'; 
import { CreateMantenimientoDto,UpdateMantenimientoDto } from '../../domain/dtos';
import { MantenimientoDatasource } from '../../domain/datasources/mantenimiento.datasource';
import { MantenimientoEntity } from '../../domain/entities/mantenimiento.entity'; 
import { AppDataSource } from '../../data/postrgress'; 

export class MantenimientoDatasourceImpl implements MantenimientoDatasource {
    async create(createMantenimientoDto: CreateMantenimientoDto): Promise<MantenimientoEntity> {
        const [error, dto] = CreateMantenimientoDto.create(createMantenimientoDto);
        if (error) throw new Error(error);
        if (!dto) throw new Error('DTO creation failed');

        const mantenimiento = new Mantenimiento();
        mantenimiento.autoId = { id: dto.autoId } as any;
        mantenimiento.conceptoId = { id: dto.conceptoId } as any;
        mantenimiento.fechaMantenimiento = (dto.fechaMantenimiento);
        mantenimiento.detalle = dto.detalle;

        await AppDataSource.manager.save(mantenimiento);
        return MantenimientoEntity.fromObject(mantenimiento);
    }

    async getAll(): Promise<MantenimientoEntity[]> {
        try {
            const mantenimientos = await AppDataSource.manager.find(Mantenimiento, {
                relations: ['vehiculo', 'concepto'],
            });
            return mantenimientos.map(mantenimiento => MantenimientoEntity.fromObject(mantenimiento));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async findById(id: number): Promise<MantenimientoEntity> {
        const mantenimiento = await AppDataSource.manager.findOne(Mantenimiento, { where: { id }, relations: ['vehiculo', 'concepto'] });
        if (!mantenimiento) throw `Mantenimiento with id ${id} not found`;
        return MantenimientoEntity.fromObject(mantenimiento);
    }

    async updateById(updateMantenimientoDto: UpdateMantenimientoDto): Promise<MantenimientoEntity> {
        const mantenimiento = await AppDataSource.manager.findOne(Mantenimiento, { where: { id: updateMantenimientoDto.id }, relations: ['vehiculo', 'concepto'] });
        if (!mantenimiento) throw `Mantenimiento with id ${updateMantenimientoDto.id} not found`;

        Object.assign(mantenimiento, updateMantenimientoDto.values);
        await AppDataSource.manager.save(mantenimiento);
        return MantenimientoEntity.fromObject(mantenimiento);
    }

    async deleteById(id: number): Promise<MantenimientoEntity> {
        const mantenimiento = await AppDataSource.manager.findOne(Mantenimiento, { where: { id }, relations: ['vehiculo', 'concepto'] });
        if (!mantenimiento) throw `Mantenimiento with id ${id} not found`;

        await AppDataSource.manager.remove(mantenimiento);
        return MantenimientoEntity.fromObject(mantenimiento);
    }
}
