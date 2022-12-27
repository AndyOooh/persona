import supertest from 'supertest';
import { app } from '../src/app';

describe('GET /questions', () => {
  test('should return 200 OK', () => {
    return supertest(app).get('/questions').expect(200);
  });
  test('should return a non-empty array', async () => {
    const response  = await supertest(app).get('/questions');
    console.log('🚀  file: app.test.ts:10  response', response)
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(3);
  });
});
