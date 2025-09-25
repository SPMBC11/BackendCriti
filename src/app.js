import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import usersRoutes from './routes/users.js';
import reviewsRoutes from './routes/reviews.js';
import albumsRoutes from './routes/albums.js';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/albums', albumsRoutes);
app.use('/api/reviews', reviewsRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

export default app;
