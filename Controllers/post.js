const postModel = require('../Models/post');
const commentModel = require('../Models/comment');

const getAllPosts = (req, res) => {
    postModel.find({}, (err, users) => {
        if (!err) return res.json(users);
        res.status(500).send("db error");
    })
}

const getPostById = (req, res) => {
    const id = req.params.id;
    postModel.find({ _id: id }, (err, post) => {
        if (!err) return res.json(post);
        res.status(500).send("db error");
    })
}

const createPost = (req, res) => {
    const postData = { ...req.body };
    const post = new postModel(postData);
    post.save((err, savedPost) => {
        if (!err) return res.json(savedPost);
        res.status(500).send("db error");
    })
}

const editPost = (req, res) => {
    const id = req.params.id;
    postModel.findByIdAndUpdate(id, req.body, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
}

const deletePost = (req, res) => {
    const id = req.params.id;
    postModel.remove({ _id: id }, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
}

const getAllPostComments = (req, res) => {
    const id = req.params.id;
    commentModel.find({ post: id }, (err, comments) => {
        if (!err) return res.json(comments);
        res.status(500).send("db error");
    })
}

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost,
    getAllPostComments
}

