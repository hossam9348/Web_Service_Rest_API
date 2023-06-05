const express = require('express');
const router = express.Router();
const commentController = require('../../Controllers/comment');


router.get("/comments", commentController.getAllComments)

router.get("/comments/:id", commentController.getCommentById)

router.post("/comments", commentController.createComment)

router.put("/comments/:id", commentController.editComment)

router.delete("/comments/:id", commentController.deleteComment)

module.exports = router;




