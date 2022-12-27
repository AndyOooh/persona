import supertest from 'supertest';
import { app } from '../src/app';

describe('GET /questions', () => {
  test('should return 200 OK', () => {
    return supertest(app).get('/questions').expect(200);
  });
  test('should return a non-empty array', async () => {
    const response  = await supertest(app).get('/questions');
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe('GET /questions/:id', () => {
  test('should return 200 OK', () => {
    return supertest(app).get('/questions/1').expect(200);
  });
  test('should return an object with the correct properties', async () => {
    const response  = await supertest(app).get('/questions/1');
    console.log('rsposnse', response.body)
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('id');
  });
});
