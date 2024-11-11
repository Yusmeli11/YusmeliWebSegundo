import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';
import { Repository } from 'typeorm';
export declare class ConceptoService {
    private ConceptoRepository;
    constructor(ConceptoRepository: Repository<Concepto>);
    create(createonceptoDto: CreateConceptoDto): Concepto
    findAll(): Promise<Concepto[]>;
    findOne(id: number): Promise<Concepto>;
    update(id: number, updateConceptoDto: UpdateConceptoDto): Promise<Concepto>;
    remove(id: number): Promise<Concepto>;
}
