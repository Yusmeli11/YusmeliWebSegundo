import { CreateAutoDto, UpdateAutoDto } from '../dtos';
import { AutoEntity } from '../entities/auto.entity';

export abstract class AutoRepository {

  abstract create(createAutoDto: CreateAutoDto): Promise<AutoEntity>;
  abstract getAll(): Promise<AutoEntity[]>;
  abstract findById(id: number): Promise<AutoEntity>;
  abstract updateById(updateAutoDto: UpdateAutoDto): Promise<AutoEntity>;
  abstract deleteById(id: number): Promise<AutoEntity>;

}
