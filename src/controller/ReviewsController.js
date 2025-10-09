import { Review, User, Album } from '../models/index.js';

export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.findAll({ include: ['user', 'album'] });
    res.json(reviews);
  } catch (err) { next(err); }
};

export const createReview = async (req, res, next) => {
  try {
    const { userId, albumId, rating, comment } = req.body;

    if (!userId || !albumId || rating === undefined) {
      return res.status(400).json({ error: 'Faltan userId, albumId o rating' });
    }

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const album = await Album.findByPk(albumId);
    if (!album) return res.status(404).json({ error: 'Album not found' });

    const review = await Review.create({
      user_id: userId,
      album_id: albumId,
      score: rating,       
      content: comment ?? "" 
    });

    res.status(201).json(review);
  } catch (err) { next(err); }
};

export const getReviewsByAlbum = async (req, res, next) => {
  try {
    const albumId = req.params.albumId;

    const reviews = await Review.findAll({
      where: { album_id: albumId },
      include: [
        {
          association: 'user',
          attributes: ['id', 'username', 'profile_pic']
        }
      ]
    });

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No se encontraron reseñas para este álbum" });
    }

    res.json(reviews);
  } catch (err) {
    console.error("❌ Error en getReviewsByAlbum:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getReviewsByUser = async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { user_id: req.params.userId }, // ✅ usar user_id
      include: ['album']
    });
    res.json(reviews);
  } catch (err) { next(err); }
};

export const updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) return res.status(404).json({ error: 'Review not found' });

    const { rating, comment } = req.body;

    await review.update({
      score: rating ?? review.score,         // ✅ la columna se llama score
      content: comment ?? review.content     // ✅ la columna se llama content
    });

    res.json(review);
  } catch (err) { next(err); }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) return res.status(404).json({ error: 'Review not found' });

    await review.destroy();
    res.json({ message: 'Review deleted' });
  } catch (err) { next(err); }
};


