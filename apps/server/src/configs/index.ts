import 'dotenv/config';

export const { NODE_ENV, PORT, FRONTEND_URL_DEV, FRONTEND_URL_PROD, DB_URL } = process.env;

export const frontendUrl = NODE_ENV === 'production' ? FRONTEND_URL_PROD : FRONTEND_URL_DEV;

export const loggingType = NODE_ENV === 'development' ? 'dev' : 'combined';
