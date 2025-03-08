import { Router } from 'express';
import authRouter from './authRoute.js';
import countUser from './countUser.js';
import resetEmail from './resetEmail.js';
import user from './user.js';
import water from './water.js';

const routers = Router();

routers.use('/users', countUser);
routers.use('/users', user);
routers.use('/auth', authRouter);
routers.use('/auth', resetEmail);
routers.use('/water', water);

export default routers;
