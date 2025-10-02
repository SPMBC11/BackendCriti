import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

import UserModel from './User.js';
import AlbumModel from './Album.js';
import ArtistModel from './Artist.js';
import ReviewModel from './Review.js';

const User = UserModel(sequelize, DataTypes);
const Album = AlbumModel(sequelize, DataTypes);
const Artist = ArtistModel(sequelize, DataTypes);
const Review = ReviewModel(sequelize, DataTypes);

// Relaciones
User.hasMany(Review, { foreignKey: 'user_id', as: 'reviews', onDelete: 'CASCADE' });
Review.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Artist.hasMany(Album, { foreignKey: 'artist_id', as: 'albums', onDelete: 'CASCADE' });
Album.belongsTo(Artist, { foreignKey: 'artist_id', as: 'artist' });

Album.hasMany(Review, { foreignKey: 'album_id', as: 'reviews', onDelete: 'CASCADE' });
Review.belongsTo(Album, { foreignKey: 'album_id', as: 'album' });

export { sequelize, User, Artist, Album, Review };
