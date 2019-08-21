import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Kásio Eduardo',
    email: 'kasioeduardo13@gmail.com',
    password_hash: '88222547',
  });

  return res.json(user);
});

export default routes;
