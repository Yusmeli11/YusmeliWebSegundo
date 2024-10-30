import { Concepto } from '../../data/postrgress/entities/concepto.entity'; 
import { CreateConceptoDto,UpdateConceptoDto } from '../../domain/dtos';
import { ConceptoDatasource } from '../../domain/datasources/concepto.datasource';
import { ConceptoEntity } from '../../domain/entities/concepto.entity'; 
import { AppDataSource } from '../../data/postrgress'; 

export class ConceptoDatasourceImpl implements ConceptoDatasource {
    async create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity> {
        const [error, dto] = CreateConceptoDto.create(createConceptoDto);
        if (error) throw new Error(error);
        if (!dto) throw new Error('DTO creation failed');

        const concepto = new Concepto();
        concepto.descripcion = dto.descripcion;

        await AppDataSource.manager.save(concepto);
        return ConceptoEntity.fromObject(concepto);
    }

    async getAll(): Promise<ConceptoEntity[]> {
        try {
            const conceptos = await AppDataSource.manager.find(Concepto);
            return conceptos.map((concepto: any) => ConceptoEntity.fromObject(concepto));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async findById(id: number): Promise<ConceptoEntity> {
        const concepto = await AppDataSource.manager.findOne(Concepto, { where: { id } });
        if (!concepto) throw `Concepto with id ${id} not found`;
        return ConceptoEntity.fromObject(concepto);
    }

    async updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity> {
        const concepto = await AppDataSource.manager.findOne(Concepto, { where: { id: updateConceptoDto.id } });
        if (!concepto) throw `Concepto with id ${updateConceptoDto.id} not found`;

        Object.assign(concepto, updateConceptoDto.values);
        await AppDataSource.manager.save(concepto);
        return ConceptoEntity.fromObject(concepto);
    }

    async deleteById(id: number): Promise<ConceptoEntity> {
        const concepto = await AppDataSource.manager.findOne(Concepto, { where: { id } });
        if (!concepto) throw `Concepto with id ${id} not found`;

        await AppDataSource.manager.remove(concepto);
        return ConceptoEntity.fromObject(concepto);
    }
}
