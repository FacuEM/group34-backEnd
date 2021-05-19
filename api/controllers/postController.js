const { Post, Category } = require("../models/");

const postController = {
  //
  fetchPosts(req, res) {
    Post.findAll({
      attributes: ["title", "image", "createdAt"],
      order: [["createdAt", "DESC"]],
      include: { model: Category, attributes: ["title"] },
    })
      .then((posts) => res.json(posts))
      .catch((err) => res.status(401).send(err.message));
  },
  //
  fetchPostById(req, res) {
    const { id } = req.params;
    Post.findByPk(id, { include: { model: Category, attributes: ["title"] } })
      .then((post) => res.json(post))
      .catch((err) => res.status(401).send(err.message));
  },
  //
  createPost(req, res) {
    Post.create(req.body)
      .then((post) => res.json(post))
      .catch((err) => res.status(401).send(err.message));
  },
  //
  editPost(req, res) {
    const { id } = req.params;
    Post.update(req.body, {
      where: { id },
      returning: true,
      plain: true,
    })
      .then(() => Post.findByPk(id))
      .then((post) => res.json(post))
      .catch((err) => res.status(401).send(err.message));
  },
  //
  deletePost(req, res) {
    const { id } = req.params;
    Post.destroy({
      where: {
        id,
      },
    })
      .then(() => res.sendStatus(204))
      .catch((err) => res.status(401).send(err.message));
  },
};

module.exports = postController;
