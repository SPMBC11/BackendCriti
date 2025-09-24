

const AlbumModel = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING, allowNull: false }
  }, { tableName: 'albums', timestamps: true });

  return Album;
};

export default AlbumModel;

