// src/models/Playlist.js
const PlaylistModel = (sequelize, DataTypes) => {
  const Playlist = sequelize.define(
    "Playlist",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    },
    {
      tableName: "playlists",
      timestamps: true
    }
  );

  /**
   * Relaciones de Playlist con otros modelos.
   * Se ejecuta desde models/index.js cuando todos los modelos están cargados.
   */
  Playlist.associate = (models) => {
    // 👤 Una playlist pertenece a un usuario
    Playlist.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user"
    });

    // 💿 Una playlist puede tener muchos álbumes (relación N:M)
    Playlist.belongsToMany(models.Album, {
      through: "playlist_albums",
      foreignKey: "playlist_id",
      otherKey: "album_id",
      as: "albums"
    });
  };

  return Playlist;
};

export default PlaylistModel;
