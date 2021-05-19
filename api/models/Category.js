const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Category extends Model {}

Category.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Category",
  }
);

module.exports = Category;
