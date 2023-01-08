import { copyFile } from 'node:fs/promises';
import { Server } from 'http';
import { once } from 'events';

import { Application } from 'express';
import supertest from 'supertest';
import jsonServer from 'json-server';

import { app } from '../src/app';
import { DB_PORT_TEST } from '../src/configs';
import { getNewQuestion } from './test.utils';

describe('Controller / Questions', () => {
  const dbPortTest = DB_PORT_TEST as string;
  let questionId = 5;
  let server: Server;

  beforeAll(async () => {
    try {
      await copyFile('../database/db.json', './tests/db.copy.json');
    } catch (error) {
      console.log('copyFile error:', error);
    }

    try {
      const application: Application = jsonServer.create();
      const router = jsonServer.router('./tests/db.copy.json');
      application.use(router);
      server = application.listen(dbPortTest);
      await once(server, 'listening');
      console.log(`json database ready on port: ${dbPortTest}`);
    } catch (error) {
      console.log('application.listen error:', error);
    }
  });

  afterAll(async () => {
    console.log('closing json server...');
    server.close(() => {
      // console.log('closed');
    });
  });

  describe('GET /questions', () => {
    it('should return 200 OK', () => {
      return supertest(app).get('/questions').expect(200);
    });
    it('should return a non-empty array', async () => {
      const response = await supertest(app).get('/questions');
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /questions/:id', () => {
    it('should return 200 OK', () => {
      return supertest(app).get('/questions/1').expect(200);
    });
    it('should return an object with the correct properties', async () => {
      const response = await supertest(app).get('/questions/1');
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty('id');
    });
  });

  describe('POST /questions', () => {
    it('should return 201 OK', async () => {
      await supertest(app).post('/questions').send(getNewQuestion(questionId)).expect(201);
      questionId++;
    });
    it('should return an object with the correct properties', async () => {
      const newQuestion = getNewQuestion(questionId);
      const response = await supertest(app).post('/questions').send(newQuestion);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('text');
      expect(response.body).toHaveProperty('options');
      questionId++;
    });
  });
});
