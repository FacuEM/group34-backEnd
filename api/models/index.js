const Post = require("./Post");
const Category = require("./Category");

Category.belongsToMany(Post, { through: "CategoryPost" });
Post.belongsToMany(Category, { through: "CategoryPost" });

module.exports = { Post, Category };
