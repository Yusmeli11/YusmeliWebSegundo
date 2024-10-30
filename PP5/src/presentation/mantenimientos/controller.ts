import { Request, Response } from 'express';
import { CreateMantenimientoDto,UpdateMantenimientoDto } from '../../domain/dtos';
import { MantenimientoRepository } from '../../domain/repositories/mantenimiento.repository';

export class MantenimientoController {
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
      private readonly mantenimientoRepository: MantenimientoRepository,
    ) { }
  
    public getMantenimientos = async (req: Request, res: Response) => {
      const autos = await this.mantenimientoRepository.getAll();
      return res.json(autos);
    };
  
    public getMantenimientoById = async (req: Request, res: Response) => {
      const id = +req.params.id;
  
      try {
        const mantenimiento = await this.mantenimientoRepository.findById(id);
        res.json(mantenimiento);
      } catch (error) {
        res.status(400).json({ error });
      }
    };
  
    public createMantenimiento = async (req: Request, res: Response) => {
      const [error, createMantenimientoDto] = CreateMantenimientoDto.create(req.body);
      if (error) return res.status(400).json({ error });
      
      const newMantenimiento = await this.mantenimientoRepository.create(createMantenimientoDto!);
      res.json(newMantenimiento);
    };
  
    public updateMantenimiento = async (req: Request, res: Response) => {
      const id = +req.params.id;
      const [error, updateMantenimientoDto] = UpdateMantenimientoDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });
  
      const updatedMantenimiento = await this.mantenimientoRepository.updateById(updateMantenimientoDto!);
      return res.json(updatedMantenimiento);
    };
  
    public deleteMantenimiento = async (req: Request, res: Response) => {
      const id = +req.params.id;
      const mantenimientoDeleted = await this.mantenimientoRepository.deleteById(id);
      res.json(mantenimientoDeleted);
    };
  }
  