import axios from 'axios';
import { Request, Response } from 'express';

import { DB_URL } from '../configs';
import { questionModel } from '../models/question.validation';
import { getErrorMessage } from '../utils/helpers.utils';

const dbBaseUrl = DB_URL as string;

// @desc get all questions
// @route GET /api/questions
// @access Public
export const getQuestions = async (req: Request, res: Response) => {
  try {
    const { data: questionsArray } = await axios.get(`${dbBaseUrl}/questions`);
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
  const { id } = req.params;
  try {
    const { data: question } = await axios.get(`${dbBaseUrl}/questions/${id}`);
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
    const { data: newQuestion } = await axios.put(`${dbBaseUrl}/questions/${id}`, { ...value });
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
    const { data: question } = await axios.delete(`${dbBaseUrl}/questions/${id}`);
    return res.status(200).send(question);   
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
