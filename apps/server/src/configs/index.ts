import 'dotenv/config';

export const {
  NODE_ENV,
  PORT,
  DB_PORT,
  DB_PORT_TEST,
} = process.env;

const { FRONTEND_URL_DEV, FRONTEND_URL_PROD, DB_BASE_URL } = process.env;

export const frontendUrl = NODE_ENV === 'production' ? FRONTEND_URL_PROD : FRONTEND_URL_DEV;

export const loggingType = NODE_ENV === 'production' ? 'combined' : 'dev';

const dbPort = NODE_ENV === 'test' ? DB_PORT_TEST : DB_PORT;

export const dbUrl = `${DB_BASE_URL}${dbPort}`;
