const express = require('express');
const router = express.Router();
const postController = require('../../Controllers/post');




router.get("/posts", postController.getAllPosts)

router.get("/posts/:id", postController.getPostById)

router.post("/posts", postController.createPost)

router.patch("/posts/:id", postController.editPost)

router.delete("/posts/:id", postController.deletePost)

router.get("/posts/:id/comments", postController.getAllPostComments)

module.exports = router;




