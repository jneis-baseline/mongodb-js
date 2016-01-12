var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// each schema maps to a mongo collection and defines the shape of the docs
var movieSchema = new Schema({
    title: String,
    genre: String,
    direction: String,
    cast: [
        {
            role: String,
            name: String
        }
    ],
    release: {
        type: Date,
        default: Date.now
    },
    meta: {
        votes: Number,
        rating: Number
    }
});

movieSchema.statics.findByTitle = function(text, callback) {
    return this.find({title: new RegExp(text, 'i')}, callback);
};

module.exports = movieSchema;
