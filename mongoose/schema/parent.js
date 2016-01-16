var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var childSchema = new Schema({
    name: String
});

// sub-docs are elements of a parent doc array
//    sub-docs are not saved individually (only when their parent is saved)

var parentSchema = new Schema({
    children: [childSchema]
})

module.exports = parentSchema;
