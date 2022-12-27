import { FRONTEND_URL } from './index';

export const corsConfig = {
  origin: [FRONTEND_URL, 'http://localhost:3000'],
  // credentials: true,
  // methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], //notice OPTIONS not needed for preflight req to pass
  // allowedHeaders: ['Access-Control-Allow-Origin', 'Origin', 'Content-Type', 'Authorization'],
};
