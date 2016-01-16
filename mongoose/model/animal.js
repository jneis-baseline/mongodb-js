var mongoose = require('mongoose');
var animalSchema = require('../schema/animal');

// custom instance methods
animalSchema.methods.findSimilarTypes = function(callback) {
    this.model('Animal').find({type: this.type}, callback);
};

var Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
