var mongoose = require('mongoose');

var schema = require('../schema/tank');

// the db collection is named after the model's plural
var Tank = mongoose.model('Tank', schema);

module.exports = Tank;
