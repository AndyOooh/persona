import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
};

export default config;
