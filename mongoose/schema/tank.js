var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    size: String
});

module.exports = schema;
