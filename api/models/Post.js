const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Post",
  }
);

module.exports = Post;
