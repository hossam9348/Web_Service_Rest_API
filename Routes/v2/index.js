const express = require('express');
const v2Router = express.Router();
const commentRouter = require('./comment');
const postRouter = require('./post');

v2Router.use(['/v2'], commentRouter); 
v2Router.use(['/v2'], postRouter); 


module.exports = v2Router;
