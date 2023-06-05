const express = require('express');
const v1Router = express.Router();
const commentRouter = require('./comment');
const postRouter = require('./post');

v1Router.use(['/v1'], postRouter); 
v1Router.use(['/v1'], commentRouter); 


module.exports = v1Router;