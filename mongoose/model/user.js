var mongoose = require('mongoose');
var schema = require('../schema/user');

var User = mongoose.model('User', schema);

// update validator
User.schema.path('color').validate(function(value) {
    return /black|red|white|yellow/i.test(value);
}, 'invalid color');

module.exports = User;
