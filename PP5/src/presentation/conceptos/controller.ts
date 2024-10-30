import { Request, Response } from 'express';
import { CreateConceptoDto,UpdateConceptoDto } from '../../domain/dtos';
import { ConceptoRepository } from '../../domain/repositories/concepto.repository';

export class ConceptoController {
    getAll() {
        throw new Error('Method not implemented.');
    }
    findById(arg0: number) {
        throw new Error('Method not implemented.');
    }
    create(body: any) {
        throw new Error('Method not implemented.');
    }
    updateById(arg0: number, body: any) {
        throw new Error('Method not implemented.');
    }
    deleteById(arg0: number) {
        throw new Error('Method not implemented.');
    }

    constructor(
      private readonly conceptoRepository: ConceptoRepository,
    ) { }
  
    public getConcpetos = async (req: Request, res: Response) => {
      const conceptos = await this.conceptoRepository.getAll();
      return res.json(conceptos);
    };
  
    public getConceptoById = async (req: Request, res: Response) => {
      const id = +req.params.id;
  
      try {
        const concepto = await this.conceptoRepository.findById(id);
        res.json(concepto);
      } catch (error) {
        res.status(400).json({ error });
      }
    };
  
    public createConcepto = async (req: Request, res: Response) => {
      const [error, createConceptoDto] = CreateConceptoDto.create(req.body);
      if (error) return res.status(400).json({ error });
      
      const newConcepto = await this.conceptoRepository.create(createConceptoDto!);
      res.json(newConcepto);
    };
  
    public updateConcepto = async (req: Request, res: Response) => {
      const id = +req.params.id;
      const [error, updateConceptoDto] = UpdateConceptoDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });
  
      const updatedConcepto = await this.conceptoRepository.updateById(updateConceptoDto!);
      return res.json(updatedConcepto);
    };
  
    public deleteConcepto = async (req: Request, res: Response) => {
      const id = +req.params.id;
      const conceptoDeleted = await this.conceptoRepository.deleteById(id);
      res.json(conceptoDeleted);
    };
  }
  