import { AutoService } from './auto.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
export declare class AutoController {
    private readonly AutoService;
    constructor(autoService: AutoService);
    create(createAutoDto: CreateAutoDto): import("./entities/auto.entity").Auto;
    findAll(): Promise<import("./entities/auto.entity").Auto[]>;
    findOne(id: string): Promise<import("./entities/auto.entity").Auto>;
    update(id: string, updateAutoDto: UpdateAutoDto): Promise<import("./entities/auto.entity").Auto>;
    remove(id: string): Promise<import("./entities/auto.entity").Auto>;
}

