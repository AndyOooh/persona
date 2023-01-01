import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import apiRoutes from './routes';
import { loggingType } from './configs';
import { corsConfig } from './configs/cors';

export const app = express();

app.use(cors(corsConfig));
app.use(morgan(loggingType));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(errorHandler);

app.use('/', apiRoutes);
