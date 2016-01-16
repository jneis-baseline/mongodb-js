var mongoose = require('mongoose');
var personSchema = require('../schema/person');

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
