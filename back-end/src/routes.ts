import { Router } from 'express';
import './controllers/OrphanagesController';

import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// rota para criar um orfanato e adcionar imagens a esse orfanato
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)
export default routes;

// rota para listar orfanatos
routes.get('/orphanages', OrphanagesController.index)

// rota para listar um único orfanato por seu id
routes.get('/orphanages/:id', OrphanagesController.show)