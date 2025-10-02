const ReviewModel = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      score: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
          max: 10
        }
      },
      is_low_score: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "albums",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
      tableName: "reviews",
      timestamps: true
    }
  );

  Review.associate = (models) => {
    Review.belongsTo(models.Album, { foreignKey: "album_id", as: "album" });
    Review.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  };

  return Review;
};

export default ReviewModel;
