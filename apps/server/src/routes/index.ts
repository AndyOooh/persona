import express from 'express';

import questionsRoutes from './question.routes';

const router = express.Router();

router.use('/questions', questionsRoutes);

export default router;
