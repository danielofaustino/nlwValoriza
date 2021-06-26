import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middleware/ensureAdmin';
import { CreateComplimentService } from './services/CreateComplimentService';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentControoler = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags',ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', createComplimentControoler.handle);
export { router };
