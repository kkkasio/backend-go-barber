import { Router } from 'express';

// models
import User from './app/models/User';

// controllers
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
