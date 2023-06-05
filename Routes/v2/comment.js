const express = require('express');
const router = express.Router();
const commentController = require('../../Controllers/comment');


router.get("/usersComments", commentController.getAllComments)

router.get("/usersComments/:id", commentController.getCommentById)

router.post("/usersComments", commentController.createComment)

router.put("/usersComments/:id", commentController.editComment)

router.delete("/usersComments/:id", commentController.deleteComment)

module.exports = router;




