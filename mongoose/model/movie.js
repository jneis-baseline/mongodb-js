var mongoose = require('mongoose');
var movieSchema = require('../schema/movie');

// assign more instance methods
movieSchema.methods.findSimilar = function(callback) {
    return this.model('Movie').find({genre: this.genre}, callback);
};

// to use schema definitions, schemas are converted to models
var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
