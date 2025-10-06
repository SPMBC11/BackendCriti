const AlbumModel = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "Album",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false
      },
      year: {
        type: DataTypes.STRING(4),
        allowNull: false
      },
      image_url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "artists",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    },
    {
      tableName: "albums",
      timestamps: true
    }
  );

  Album.associate = (models) => {
    Album.belongsTo(models.Artist, {
      foreignKey: "artist_id",
      as: "artist"
    });

    // Un álbum puede estar en muchas playlists
  Album.belongsToMany(models.Playlist, {
    through: "playlist_albums",
    foreignKey: "album_id",
    otherKey: "playlist_id",
    as: "playlists"
  });
  };




  return Album;
};

export default AlbumModel;
