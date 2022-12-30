import supertest from 'supertest';
// import fs from 'node:fs/promises';
import fs from 'fs';
import { exec } from 'node:child_process';
import util from 'util';
const execPromise = util.promisify(exec);
import { execa } from 'execa';
import { app } from '../src/app';
import { DB_PORT_TEST } from '../src/configs';

import { deleteNewQuestion, getNewQuestion } from './test.utils';

describe('Controller / Questions', () => {
  beforeAll(async () => {
    // const response = await fs.copyFile('./test/db.json', './test/db.copy.json');
    fs.copyFile('./test/db.json', './test/db.copy.json', error => {
      if (error) {
        console.log('copyFile error:', error);
      }
    });
    // console.log('🚀  file: controller.test.ts:12  response', response);
    // if (error) throw error;
    // console.log('source.txt was copied to destination.txt');

    const startJsonServerCommand = `json-server --watch ./test/db.copy.json --port ${DB_PORT_TEST}`;
    console.log('after startJsonServer*****************');
    const response3 = await execa(startJsonServerCommand);
    // console.log('🚀  file: controller.test.ts:28  response3', response3)

    // const response2 = await execPromise(startJsonServerCommand);
    // console.log('🚀  file: controller.test.ts:21  response2', response2)
    // exec(startJsonServerCommand, (error) => {
    //   if (error) {
    //     console.error(`exec error: ${error}`);
    //     return;
    //   }
    // })
    console.log('after execPromise***************');
  }, 20000);

  // afterAll(async () => {
  // kill $(lsof -t -i:(8010)
  //   const stopJsonServerCommand = `kill $(lsof -t -i:${DB_PORT_TEST})`;
  //   await execPromise(stopJsonServerCommand);
  //   const response = await fs.unlink('./test/db.copy.json');
  //   console.log('🚀  file: controller.test.ts:24  response', response);
  //   // if (err) throw err;
  //   // console.log('db.copy.json was deleted');
  // });

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
      const id = 5;
      await supertest(app).post('/questions').send(getNewQuestion(id)).expect(201);
      deleteNewQuestion(id);
    });
    it.only('should return an object with the correct properties', async () => {
      const id = 9126;
      try {
        const newQuestion = getNewQuestion(id);
        console.log('🚀  file: controller.test.ts:73  newQuestion', newQuestion);
        const response = await supertest(app).post('/questions').send(newQuestion);
        console.log('🚀  file: controller.test.ts:75  response', response.body);
        // expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('text');
        expect(response.body).toHaveProperty('options');
        // deleteNewQuestion(id);
      } catch (error) {
        console.log('🚀  file: controller.test.ts:59  error', error);
      }
    });
  });
});
