'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CommentSchema = new mongoose.Schema({
  _author: { 
    type: String, 
    ref: 'User' 
  },
  description: String
});

export default mongoose.model('Comment', CommentSchema);
