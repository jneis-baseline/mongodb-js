var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: String,
    year: Number
});

// doc middleware supported for: init, validate, save, remove

// pre hook
schema.pre('save', function(next) {     // serial execution of multiple middleware
    console.log('pre-save middleware');
    next(); // or next(err)
});

// post hook
schema.post('remove', function(doc) {
    console.log('post-remove middleware - removed:', doc);
});

// query middleware supported for:
//   count, find, findOne, findOneAndRemove, findOneAndUpdate, update

schema.pre('update', function() {
    console.log('pre-update middleware');
});

schema.post('find', function(result) {
    console.log('post-find middleware - result:', result);
});

module.exports = schema;
