var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// the 'ref' options tells which model to use during population
//    - the reference type must match the referenced field type
//    - ObjectId, Number and String are valid ref types

var schema = new Schema({
    title: String,
    
    // reference
    _creator: {
        type: Number,
        ref: 'Author'
    },

    // reference
    fans: [{
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }]
});

module.exports = schema;
