var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// doc validators do not run on undefined values (except for the 'required' validator)

var schema = new Schema({
    name: {
        type: String,
        required: true, // built-in, for all schema types
        minlength: 5,   // built-in, for strings
        maxlength: 50
    },
    email: {
        type: String,
        match: [ /\@/, "invalid email ({VALUE})" ] // built-in, for strings
    },
    genre: {
        type: String,
        enum: ['male', 'female']    // built-in, for strings
    },
    age: {
        type: Number,
        min: 18,    // built-in, for numbers
        max: 65
    },
    phone: {
        type: String,
        validate: {                     // custom validator
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: 'invalid phone number ({VALUE})'
        }
    },
    color: String        
});

module.exports = schema;
