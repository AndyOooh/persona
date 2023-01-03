import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import apiRoutes from './routes';
import { loggingType } from './configs';
import { corsConfig } from './configs/cors';

export const app = express();

app
  .use(morgan(loggingType))
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(cors(corsConfig));

// app.use(errorHandler);

app.use('/', apiRoutes);
