import { Auto } from '../../data/postrgress/entities/auto.entity'; 
import { CreateAutoDto,UpdateAutoDto } from '../../domain/dtos';
import { AutoDatasource } from '../../domain/datasources/auto.dataosurce';
import { AutoEntity } from '../../domain/entities/auto.entity'; 
import { AppDataSource } from '../../data/postrgress'; 

export class AutoDatasourceImpl implements AutoDatasource {
    async create(createAutoDto: CreateAutoDto): Promise<AutoEntity> {
        const [error, dto] = CreateAutoDto.create(createAutoDto);
        if (error) throw new Error(error);
        if (!dto) throw new Error('DTO creation failed');

        const auto = new Auto();
        auto.descripcion = dto.descripcion;
        auto.placa = dto.placa;
        auto.color = dto.color;

        await AppDataSource.manager.save(auto);
        return AutoEntity.fromObject(auto);
    }

    async getAll(): Promise<AutoEntity[]> {
        try {
            const autos = await AppDataSource.manager.find(Auto);
            return autos.map((auto: any) => AutoEntity.fromObject(auto));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async findById(id: number): Promise<AutoEntity> {
        const auto = await AppDataSource.manager.findOne(Auto, { where: { id } });
        if (!auto) throw new Error(`Auto with id ${id} not found`);
        return AutoEntity.fromObject(auto);
    }

    async updateById(updateAutoDto: UpdateAutoDto): Promise<AutoEntity> {
        const auto = await AppDataSource.manager.findOne(Auto, { where: { id: updateAutoDto.id } });
        if (!auto) throw new Error(`Auto with id ${updateAutoDto.id} not found`);

        Object.assign(auto, updateAutoDto.values);
        await AppDataSource.manager.save(auto);
        return AutoEntity.fromObject(auto);
    }

    async deleteById(id: number): Promise<AutoEntity> {
        const auto = await AppDataSource.manager.findOne(Auto, { where: { id } });
        if (!auto) throw new Error(`Auto with id ${id} not found`);

        await AppDataSource.manager.remove(auto);
        return AutoEntity.fromObject(auto);
    }
}
