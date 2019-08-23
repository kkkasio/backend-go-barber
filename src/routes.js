import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

// controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// middlerare
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); // para todas as rotas abaixo
routes.put('/users2', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
