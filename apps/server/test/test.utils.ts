import supertest from 'supertest';
import { app } from '../src/app';

import { getErrorMessage } from '../src/utils'

export const getNewQuestion = (id: number) => {
  return {
    id: id,
    text: 'What is your favorite color?',
    options: [
      {
        text: 'Red',
        score: 0.5,
      },
      {
        text: 'Blue',
        score: 0.5,
      },
    ],
  };
};

export const deleteNewQuestion = async (id: number) => {
  try {
    const response = await supertest(app).delete(`/questions/${id}`);
    console.log(response);
  } catch (error) {
    console.log('🚀  file: test.utils.ts:27  error', error);
    getErrorMessage(error);
  }
};

// export const newQuestion = {
//     id: 99,
//     text: 'What is your favorite color?',
//     options: [
//       {
//         text: 'Red',
//         score: 0.5,
//       },
//       {
//         text: 'Blue',
//         score: 0.5,
//       },
//     ],
//   }
