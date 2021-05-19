const { Category } = require("../models");

const categoryController = {
  //
  fetchCategories(req, res) {
    Category.findAll({
      attributes: ["title"],
    })
      .then((categories) => res.json(categories))
      .catch((err) => res.status(401).send(err.message));
  },
  //
  createCategory(req, res) {
    Category.create(req.body)
      .then((categories) => res.json(categories))
      .catch((err) => res.status(401).send(err.message));
  },
  //
  deleteCategory(req, res) {
    const { id } = req.params;
    Category.destroy({
      where: {
        id,
      },
    })
      .then(() => res.sendStatus(204))
      .catch((err) => res.status(401).send(err.message));
  },
};

module.exports = categoryController;
