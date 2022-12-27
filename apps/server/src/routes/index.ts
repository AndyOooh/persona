import express from 'express';

import usersRoutes from './users/users.routes';

const router = express.Router();

router.use('/users', usersRoutes);

export default router;
