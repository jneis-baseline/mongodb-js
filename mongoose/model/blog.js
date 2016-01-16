var mongoose = require('mongoose');
var blogSchema = require('../schema/blog');

// to use a schema definition,
//   the schema must be converted to a model
var Blog = mongoose.model('Blog', blogSchema);

// instances of models are documents

module.exports = Blog
