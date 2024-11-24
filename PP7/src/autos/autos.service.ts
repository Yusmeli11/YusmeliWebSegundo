import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auto } from './entities/auto.entity';
import { CreateAutoInput } from './dto/create-auto.input';
import { UpdateAutoInput } from './dto/update-auto.input';

@Injectable()
export class AutosService {
  constructor(
    @InjectRepository(Auto)
    private autosRepository: Repository<Auto>,
  ) {}

  create(createAutoInput: CreateAutoInput) {
    const auto = this.autosRepository.create(createAutoInput);
    return this.autosRepository.save(auto);
  }

  findAll() {
    return this.autosRepository.find();
  }

  findOne(id: number) {
    return this.autosRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, updateAutoInput: UpdateAutoInput) {
    await this.autosRepository.update(id, updateAutoInput);
    return this.findOne(id);
  }

  async remove(id: number) {
    const auto = await this.findOne(id);
    await this.autosRepository.remove(auto);
    return auto;
  }
}
