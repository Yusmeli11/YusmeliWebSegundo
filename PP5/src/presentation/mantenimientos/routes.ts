import { Router } from 'express';
import { MantenimientoController } from './controller';
import { MantenimientoDatasourceImpl } from '../../infracestructure/datasource/mantenimiento.datasource.impl';
import { MantenimientoRepositoryImpl } from '../../infracestructure/repositories/mantenimiento.repositories.impl';

export class MantenimientoRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new MantenimientoDatasourceImpl();
    const mantenimientoRepository = new MantenimientoRepositoryImpl(datasource);
    const mantenimientoController = new MantenimientoController(mantenimientoRepository);

  
    router.get('/', async (req, res) => {
      const mantenimientos = await mantenimientoController.getAll();
      res.json(mantenimientos);
    });

    router.get('/:id', async (req, res) => {
      const mantenimiento = await mantenimientoController.findById(Number(req.params.id));
      res.json(mantenimiento);
    });

    router.post('/', async (req, res) => {
      const newMantenimiento = await mantenimientoController.create(req.body);
      res.json(newMantenimiento);
    });

    router.put('/:id', async (req, res) => {
      const updatedMantenimiento = await mantenimientoController.updateById(Number(req.params.id), req.body);
      res.json(updatedMantenimiento);
    });

    router.delete('/:id', async (req, res) => {
      const deletedMantenimiento = await mantenimientoController.deleteById(Number(req.params.id));
      res.json(deletedMantenimiento);
    });

    return router;
  }

}
