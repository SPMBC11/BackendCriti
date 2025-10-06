import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

// Importar los modelos
import UserModel from './User.js';
import AlbumModel from './Album.js';
import ArtistModel from './Artist.js';
import ReviewModel from './Review.js';
import PlaylistModel from './Playlist.js';

// Inicializar modelos
const User = UserModel(sequelize, DataTypes);
const Album = AlbumModel(sequelize, DataTypes);
const Artist = ArtistModel(sequelize, DataTypes);
const Review = ReviewModel(sequelize, DataTypes);
const Playlist = PlaylistModel(sequelize, DataTypes);

// Guardar todos los modelos en un objeto
const models = { User, Album, Artist, Review, Playlist };

// 🔁 Ejecutar las asociaciones definidas en cada modelo
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Exportar sequelize y todos los modelos
export { sequelize, User, Artist, Album, Review, Playlist};
export default models;
