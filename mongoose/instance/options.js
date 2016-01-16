module.exports = function() {
    var mongoose = require('mongoose');
    var schema = require('../schema/options');
    var Any = mongoose.model('Any', schema);
    var any = new Any({field: {subfield: 'value'}});

    //any.save();

    Any.findOne({'field.subfield': 'value'}, function(err, result) {     
        // id undefined due to schema options 'id: false'
        console.log('accessing id:', result.id);
    });
};