const ArtistModel = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    "Artist",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      image_url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      genre: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    },
    {
      tableName: "artists",
      timestamps: true
    }
  );

  return Artist;
};

export default ArtistModel;
