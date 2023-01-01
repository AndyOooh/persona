import express from 'express';
import {
  getQuestions,
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
} from '../controllers/question.controller';

const router = express.Router();

router.route('/').get(getQuestions).post(createQuestion);
router.route('/:id').get(getQuestion).put(updateQuestion).delete(deleteQuestion);

export default router;
