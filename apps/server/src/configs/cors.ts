import { CorsOptions } from 'cors';
import { frontendUrl } from './index';

export const corsConfig: CorsOptions = {
  origin: [frontendUrl, 'http://localhost:3000'],
};
