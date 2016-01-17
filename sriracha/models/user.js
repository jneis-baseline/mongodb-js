var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('User', schema);
