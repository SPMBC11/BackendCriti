
import { Album } from '../models/Indexs.js';

export const listAlbums = async (req, res, next) => {
  try {
    const albums = await Album.findAll({ include: ['artist'] });
    res.json(albums);
  } catch (err) { next(err); }
};

export const getAlbumById = async (req, res, next) => {
  try {
    const album = await Album.findByPk(req.params.id, { include: ['reviews', 'artist'] });
    if (!album) return res.status(404).json({ error: 'Album not found' });
    res.json(album);
  } catch (err) { next(err); }
};
