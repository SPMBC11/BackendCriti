const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      profile_pic: {
        type: DataTypes.STRING,  // URL o ruta de imagen
        allowNull: true
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      followers: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      following: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      tableName: "users",
      timestamps: true
    }
  );

  User.associate = (models) => {
    // Un usuario puede tener muchas reviews
    User.hasMany(models.Review, {
      foreignKey: "user_id",
      as: "reviews"
    });
    // Un usuario puede tener muchas playlists
     User.hasMany(models.Playlist, {
    foreignKey: "user_id",
    as: "playlists"
    });
  };


 

  return User;
};

export default UserModel;
