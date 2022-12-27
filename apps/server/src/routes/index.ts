import express from 'express';

import questionsRoutes from './questions.routes';
// import questionsRoutes from './answers/answers.routes';

const router = express.Router();

router.use('/questions', questionsRoutes);
// router.use('/answers', answersRoutes);

export default router;
