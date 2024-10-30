import { Request, Response } from 'express';
import { CreateAutoDto,UpdateAutoDto } from '../../domain/dtos';
import { AutoRepository } from '../../domain/repositories/auto.repository';

export class AutoController {
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
      private readonly autoRepository: AutoRepository,
    ) { }
  
    public getAutos = async (req: Request, res: Response) => {
      const autos = await this.autoRepository.getAll();
      return res.json(autos);
    };
  
    public getAutoById = async (req: Request, res: Response) => {
      const id = +req.params.id;
  
      try {
        const auto = await this.autoRepository.findById(id);
        res.json(auto);
      } catch (error) {
        res.status(400).json({ error });
      }
    };
  
    public createAuto = async (req: Request, res: Response) => {
      const [error, createAutoDto] = CreateAutoDto.create(req.body);
      if (error) return res.status(400).json({ error });
      
      const newAuto = await this.autoRepository.create(createAutoDto!);
      res.json(newAuto);
    };
  
    public updateAuto = async (req: Request, res: Response) => {
      const id = +req.params.id;
      const [error, updateAutoDto] = UpdateAutoDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });
  
      const updatedAuto = await this.autoRepository.updateById(updateAutoDto!);
      return res.json(updatedAuto);
    };
  
    public deleteAuto = async (req: Request, res: Response) => {
      const id = +req.params.id;
      const autoDeleted = await this.autoRepository.deleteById(id);
      res.json(autoDeleted);
    };
  }
  