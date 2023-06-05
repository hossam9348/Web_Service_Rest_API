const commentMOdel = require('../Models/comment');


const getAllComments = (req, res) => {
    commentMOdel.find({}, (err, comments) => {
        if (!err) return res.json(comments);
        res.status(500).send("db error");
    }).populate('post');
}

const getCommentById = (req, res) => {
    const id = req.params.id;
    commentMOdel.find({ _id: id }, (err, comment) => {
        if (!err) return res.json(comment);
        res.status(500).send("db error");
    }).populate('post');
}

const createComment = (req, res) => {
    const commentData = { ...req.body };
    const comment = new commentMOdel(commentData);
    comment.save((err, savedComment) => {
        if (!err) return res.json(savedComment);
        res.status(500).send("db error");
    })
}

const editComment = (req, res) => {
    const id = req.params.id;
    commentMOdel.findByIdAndUpdate(id, req.body, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
}


const deleteComment = (req, res) => {
    const id = req.params.id;
    commentMOdel.remove({ _id: id }, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
}



module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    editComment,
    deleteComment
}