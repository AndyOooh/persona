import 'dotenv/config';

export const { NODE_ENV, PORT, FRONTEND_URL_DEV, FRONTEND_URL_PROD } = process.env;

export const FRONTEND_URL = NODE_ENV === 'production' ? FRONTEND_URL_PROD : FRONTEND_URL_DEV;
