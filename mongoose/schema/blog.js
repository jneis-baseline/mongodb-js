var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// each schema maps to a mongo collection and defines the shape of the docs
var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [
        {
            body: String,
            date: Date
        }
    ],
    date: {
        type: Date,
        // default value
        default: Date.now
    },    
    meta: {
        votes: Number,
        favs: Number
    }
});

// adding late keys
blogSchema.add({
    hidden: Boolean
});

// SchemaTypes: String, Number, Boolean, Date, Array,
//   ObjectId, Mixed (anything), Buffer (binaries)

module.exports = blogSchema;
