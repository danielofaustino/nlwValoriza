import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { router } from './routes';
import './database';
import { middlewares } from './middleware';

const middleware = new middlewares();

const app = express();

app.use(express.json());

app.use(router);

app.use(middleware.errors);

app.listen(3000, () => console.log('Server is Running'));
