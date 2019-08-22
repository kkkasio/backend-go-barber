import { Router } from 'express';

// models
import User from './app/models/User';

// controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// middlerare
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); // para todas as rotas abaixo
routes.put('/users', UserController.update);

export default routes;
