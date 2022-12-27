import express from 'express';
import {
  getQuestions,
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
  getResult
} from '../controllers/questions.controller';

// import QuestionsValidator from './Questions.validator';

const router = express.Router();

router.route('/').get(getQuestions).post(
  // QuestionsValidator.register,
  createQuestion
);
router.route('/:id').get(getQuestion).put(updateQuestion).delete(deleteQuestion);
router.route('/get-result').post(getResult);

export default router;
