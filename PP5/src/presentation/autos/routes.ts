import { Router } from 'express';
import { AutoController } from './controller';
import { AutoDatasourceImpl } from '../../infracestructure/datasource/auto.datasource.impl';
import { AutoRepositoryImpl } from '../../infracestructure/repositories/auto.repositories.impl';

export class AutoRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new AutoDatasourceImpl();
    const autoRepository = new AutoRepositoryImpl(datasource);
    const autoController = new AutoController(autoRepository);

  
    router.get('/', async (req, res) => {
      const autos = await autoController.getAll();
      res.json(autos);
    });

    router.get('/:id', async (req, res) => {
      const auto = await autoController.findById(Number(req.params.id));
      res.json(auto);
    });

    router.post('/', async (req, res) => {
      const newAuto = await autoController.create(req.body);
      res.json(newAuto);
    });

    router.put('/:id', async (req, res) => {
      const updatedAuto = await autoController.updateById(Number(req.params.id), req.body);
      res.json(updatedAuto);
    });


    router.delete('/:id', async (req, res) => {
      const deletedAuto = await autoController.deleteById(Number(req.params.id));
      res.json(deletedAuto);
    });

    return router;
  }

}
