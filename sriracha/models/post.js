var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: String,
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Post', schema);
