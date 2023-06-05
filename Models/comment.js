const mongoose = require('mongoose');

commentSchema = new mongoose.Schema({
    content: String,
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'post'}
})

const commentModel = mongoose.model('comment', commentSchema);

module.exports = commentModel; 