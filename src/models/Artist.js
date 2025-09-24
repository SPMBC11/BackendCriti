
const ArtistModel = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, { tableName: 'artists', timestamps: true });
  return Artist;
};

export default ArtistModel;
