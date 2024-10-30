import { Router } from 'express';

import { AutoRoutes } from '../presentation/autos/routes';
import { ConceptoRoutes } from '../presentation/conceptos/routes';
import { MantenimientoRoutes } from '../presentation/mantenimientos/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    const  PORT = 3000

    router.use('/api/auto', AutoRoutes.routes );
    router.use('/api/concepto', ConceptoRoutes.routes );
    router.use('/api/mantenimiento', MantenimientoRoutes.routes );
    
    return router;
  }


}

