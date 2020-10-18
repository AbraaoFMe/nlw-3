import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesContoller from './controllers/OrphanagesControllers'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesContoller.index);
routes.get('/orphanage/:id', OrphanagesContoller.show);
routes.post('/orphanages', upload.array('images'), OrphanagesContoller.create);

export default routes;