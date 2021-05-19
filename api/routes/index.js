const express = require("express");
const postController = require("../controllers/");
const router = express.Router();

// fetch movies
router.get("/posts", postController.fetchPosts);
// add movie
router.get("/posts/:id", postController.fetchPostById);
// edit movie
router.post("/posts", postController.createPost);
// remove movie
router.patch("/posts/:id", postController.editPost);
// fetch movie
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
