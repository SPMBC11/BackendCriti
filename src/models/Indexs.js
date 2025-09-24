

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
User.hasMany(Review, { foreignKey: 'userId', as: 'reviews', onDelete: 'CASCADE' });
Review.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Artist.hasMany(Album, { foreignKey: 'artistId', as: 'albums', onDelete: 'CASCADE' });
Album.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' });

Album.hasMany(Review, { foreignKey: 'albumId', as: 'reviews', onDelete: 'CASCADE' });
Review.belongsTo(Album, { foreignKey: 'albumId', as: 'album' });

export { sequelize, User, Artist, Album, Review };

