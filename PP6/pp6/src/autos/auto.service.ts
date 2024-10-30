import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './entities/auto.entity';
import { Repository } from 'typeorm';
export declare class AutoService {
    private AutoRepository;
    constructor(AutoRepository: Repository<Auto>);
    create(createAutoDto: CreateAutoDto): Auto
    findAll(): Promise<Auto[]>;
    findOne(id: number): Promise<Auto>;
    update(id: number, updateCajaDto: UpdateAutoDto): Promise<Auto>;
    remove(id: number): Promise<Auto>;
}
