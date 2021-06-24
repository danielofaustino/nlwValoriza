import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { router } from './routes';
import './database';
import { middlewareError } from './middleware/middlewareError';

const app = express();

app.use(express.json());

app.use(router);

app.use(middlewareError);

app.listen(3000, () => console.log('Server is Running'));
