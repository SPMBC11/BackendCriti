

import express from 'express';
import { listAlbums, getAlbumById } from '../controller/AlbumsController.js';
import { getReviewsByAlbum } from '../controller/ReviewsController.js';

const router = express.Router();
router.get('/', listAlbums);
router.get('/:id', getAlbumById);
router.get('/:albumId/reviews', getReviewsByAlbum);

export default router;

