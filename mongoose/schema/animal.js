var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: String,
    type: String,
    tags: {
        type: [String],
        index: true // define index at field level
    }
});

// define index at schema level (compound indexes)
animalSchema.index({
    name: 1, // ascending
    type: -1 // descending
});

animalSchema.statics.findByName = function(name, callback) {
    this.find({name: new RegExp(name, 'i')}, callback);
};

module.exports = animalSchema;
