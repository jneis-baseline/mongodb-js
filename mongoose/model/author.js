var mongoose = require('mongoose');
var schema = require('../schema/author');

var Author = mongoose.model('Author', schema);

module.exports = Author;
