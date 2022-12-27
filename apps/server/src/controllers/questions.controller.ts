import axios from 'axios';
import { Request, Response } from 'express';
import { DB_URL } from '../configs';

const dbBaseUrl = DB_URL as string;

// @desc get all questions
// @route GET /api/questions
// @access Public
export const getQuestions = async (req: Request, res: Response) => {
  const { data: questionsArray } = await axios.get(`${dbBaseUrl}/questions`);
  console.log('🚀  file: questions.controller.ts:10  questionsArray', questionsArray);
  return res.status(200).send(questionsArray);
};

// @desc Create new question
// @route POST /api/questions
// @access Private
export const createQuestion = async () => {
  console.log('Hi from createQuestion');
};

// @desc get a question
// @route GET /api/questions/:id
// @access Public
export const getQuestion = async (req: Request, res: Response) => {
  // const { id } = req.params;
  // const question = questions.filter(q => q.id === Number(id));
  // return res.json(question);
};

// @desc update a question
// @route PUT /api/questions/:id/update
// @access Private
export const updateQuestion = () => {
  console.log('Hi from updateQuestion');
};

// @desc delete a question
// @route DELETE /api/questions/:id/delete
// @access Private
export const deleteQuestion = async () => {
  console.log('Hi from deleteQuestion');
};

export const getResult = (req: Request, res: Response) => {
  const answer = req.body;
  const points = answer.reduce((acc: number, curr: number) => acc + curr, 0);
};
