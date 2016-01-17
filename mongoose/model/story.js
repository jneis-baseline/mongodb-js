var mongoose = require('mongoose');
var schema = require('../schema/story');

var Story = mongoose.model('Story', schema);

module.exports = Story;
