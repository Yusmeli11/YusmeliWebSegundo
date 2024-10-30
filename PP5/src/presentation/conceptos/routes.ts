import { Router } from 'express';
import { ConceptoController } from './controller';
import { ConceptoDatasourceImpl } from '../../infracestructure/datasource/concepto.datasource.impl';
import { ConceptoRepositoryImpl } from '../../infracestructure/repositories/concepto.repositories.impl';

export class ConceptoRoutes {

    static get routes(): Router {
      const router = Router();


      const datasource = new ConceptoDatasourceImpl();
      const conceptoRepository = new ConceptoRepositoryImpl(datasource);
      const conceptoController = new ConceptoController(conceptoRepository);
  
    
      router.get('/', async (req, res) => {
        const conceptos =  conceptoController.getAll();
        res.json(conceptos);
      });
  
      router.get('/:id', async (req, res) => {
        const concepto =  conceptoController.findById(Number(req.params.id));
        res.json(concepto);
      });
  
      router.post('/', async (req, res) => {
        const newConcepto =  conceptoController.create(req.body);
        res.json(newConcepto);
      });
  
      router.put('/:id', async (req, res) => {
        const updatedConcepto = conceptoController.updateById(Number(req.params.id), req.body);
        res.json(updatedConcepto);
      });
  

      router.delete('/:id', async (req, res) => {
        const deletedConcepto = conceptoController.deleteById(Number(req.params.id));
        res.json(deletedConcepto);
      });
  
      return router;
    }
  
  }
  