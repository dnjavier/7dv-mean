'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var AnimalSchema = new mongoose.Schema({
  numberId: String,
  gender: String,
  age: String,
  father: String,
  mother: String,
  breed: String,
  farm: String,
  nickname: String,
  weight: String,
  price: String,
  favorite: Boolean,
  defective: Boolean,
  sold: Boolean,
  comments: [{ 
    type: String, 
    ref: 'Comment' 
  }],
});

export default mongoose.model('Animal', AnimalSchema);
