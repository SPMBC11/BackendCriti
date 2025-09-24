
import express from 'express';
import { listUsers, getUserById } from '../controller/UsersController.js';

const router = express.Router();
router.get('/', listUsers);
router.get('/:id', getUserById);

export default router;
