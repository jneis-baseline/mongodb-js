var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String,

    living: Boolean,
    
    updated: {
        type: Date,
        default: Date.now
    },

    age: {
        type: Number,
        min: 18,
        max: 65
    },

    arrayof: [String],

    nested: {
        stuff: {
            type: String,
            lowercase: true,
            trim: true
        }
    },

    // accepts anything
    mixed: Schema.Types.Mixed, // or {}

    binary: Buffer,

    _someId: Schema.Types.ObjectId
});

module.exports = schema;
