import axios from 'axios';
import { Request, Response } from 'express';

import { dbUrl } from '../configs';
console.log('🚀  file: questions.controller.ts:5  dbUrl', dbUrl)
import { questionModel } from '../models/question.validation';
import { getErrorMessage } from '../utils';

// @desc get all questions
// @route GET /api/questions
// @access Public
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { data: questionsArray } = await axios.get(`${dbUrl}/questions`);
    return res.status(200).send(questionsArray);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

// @desc Create new question
// @route POST /api/questions
// @access Private
export const createQuestion = async (req: Request, res: Response) => {
  const { error, value } = questionModel.validate(req.body);
  console.log('🚀  file: questions.controller.ts:25  value', value)
  if (error) {
    const { message } = error.details[0];
    console.log('🚀  file: questions.controller.ts:28  message', message)
    return res.status(400).send(message);
  }
  console.log('past erorr checkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
  try {
    const { data: newQuestion } = await axios.post(`${dbUrl}/questions`, { ...value });
    console.log('🚀  file: questions.controller.ts:33  newQuestion', newQuestion)
    return res.status(201).send(newQuestion);
  } catch (error) {
    console.log('🚀  file: questions.controller.ts:37  error', error)
    return res.status(500).send(getErrorMessage(error));
  }
};

// @desc get a question
// @route GET /api/questions/:id
// @access Public
export const getQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { data: question } = await axios.get(`${dbUrl}/questions/${id}`);
    return res.status(200).send(question);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

// @desc update a question - NB: this replaces a question fully. For updating only a few fields, use patch
// @route PUT /api/questions/:id/update
// @access Private
export const updateQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { error, value } = questionModel.validate(req.body);
  if (error) {
    const { message } = error.details[0];
    return res.status(400).send(message);
  }
  try {
    const { data: newQuestion } = await axios.put(`${dbUrl}/questions/${id}`, { ...value });
    return res.status(201).send(newQuestion);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

// @desc delete a question
// @route DELETE /api/questions/:id/delete
// @access Private
export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { data: question } = await axios.delete(`${dbUrl}/questions/${id}`);
    return res.status(200).send(question);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
