const express = require("express");
const postController = require("../controllers/postController");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

// Category //
router.get("/category", categoryController.fetchCategories);
router.post("/category", categoryController.createCategory);
router.delete("/category/:id", categoryController.deleteCategory);

// Post //
router.get("/posts", postController.fetchPosts);
router.get("/posts/:id", postController.fetchPostById);
router.post("/posts", postController.createPost);
router.patch("/posts/:id", postController.editPost);
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
