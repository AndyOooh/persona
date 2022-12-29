import axios from 'axios';
import { Request, Response } from 'express';
import { DB_URL } from '../configs';
import { questionModel } from '../models/question.model';
import { getErrorMessage } from '../utils/helpers.utils';

const dbBaseUrl = DB_URL as string;

// @desc get all questions
// @route GET /api/questions
// @access Public
export const getQuestions = async (req: Request, res: Response) => {
  const { data: questionsArray } = await axios.get(`${dbBaseUrl}/questions`);
  return res.status(200).send(questionsArray);
};

// @desc Create new question
// @route POST /api/questions
// @access Private
export const createQuestion = async (req: Request, res: Response) => {
  const { error, value } = questionModel.validate(req.body);
  if (error) {
    const { message } = error.details[0];
    return res.status(400).send(message);
  }

  try {
    const { data: newQuestion } = await axios.post(`${dbBaseUrl}/questions`, { ...value });
    return res.status(201).send(newQuestion);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

// @desc get a question
// @route GET /api/questions/:id
// @access Public
export const getQuestion = async (req: Request, res: Response) => {
  console.log('Hi from getQuestion');
  const { id } = req.params;
  console.log('🚀  file: questions.controller.ts:28  id', id);
  const { data: question } = await axios.get(`${dbBaseUrl}/questions/${id}`);
  return res.status(200).send(question);
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
