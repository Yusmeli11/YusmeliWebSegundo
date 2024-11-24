import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Concepto } from './entities/concepto.entity';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';

@Injectable()
export class ConceptoService {
  constructor(
    @InjectRepository(Concepto)
    private conceptoRepository: Repository<Concepto>,
  ) {}

  create(createConceptoInput: CreateConceptoInput) {
    const concepto = this.conceptoRepository.create(createConceptoInput);
    return this.conceptoRepository.save(concepto);
  }

  findAll() {
    return this.conceptoRepository.find();
  }

  findOne(id: number) {
    return this.conceptoRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, updateConceptoInput: UpdateConceptoInput) {
    await this.conceptoRepository.update(id, updateConceptoInput);
    return this.findOne(id);
  }

  async remove(id: number) {
    const concepto = await this.findOne(id);
    await this.conceptoRepository.remove(concepto);
    return concepto;
  }
}
