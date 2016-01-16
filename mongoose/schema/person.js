var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: {
        first: String,
        last: String
    }
});

personSchema.virtual('name.full').get(function() {
    return this.name.first + ' ' + this.name.last;
});

personSchema.virtual('name.full').set(function(name) {
    var split = name.split(' ');
    this.name.first = split[0];
    this.name.last = split[1];
});

module.exports = personSchema;
