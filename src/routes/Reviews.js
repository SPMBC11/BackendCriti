
import express from 'express';
import { createReview, getReviewsByUser, updateReview, deleteReview, getAllReviews } from '../controller/ReviewsController.js';

const router = express.Router();
router.get('/', getAllReviews);
router.post('/', createReview);
router.get('/user/:user_id', getReviewsByUser);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;

