var mongoose = require('mongoose');
var schema = require('../schema/parent');

var Parent = mongoose.model('Parent', schema);

module.exports = Parent;
