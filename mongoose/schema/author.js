var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    _id: Number,
    name: String,
    age: Number
});

module.exports = schema;
