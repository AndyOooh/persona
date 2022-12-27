import express from 'express';
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} from '../../controllers/user.controller';

// import usersValidator from './users.validator';

const router = express.Router();

router.route('/').get(getUsers).post(
  // usersValidator.register,
  createUser
);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;
