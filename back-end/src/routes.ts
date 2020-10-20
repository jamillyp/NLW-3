import { Router } from 'express';
import './controllers/OrphanagesController';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

// rota para criar um orfanato
routes.post('/orphanages', OrphanagesController.create)
export default routes;

// rota para listar orfanatos
routes.get('/orphanages', OrphanagesController.index)