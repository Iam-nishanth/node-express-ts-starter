import express from 'express';
import Main from '../../controllers';

export const authRouter = express.Router();

authRouter.get('/users', Main.users);
