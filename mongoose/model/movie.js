var mongoose = require('mongoose');
var schema = require('../schema/movie');

// to use schema definitions, schemas are converted to models
module.exports = mongoose.model('Movie', schema);
