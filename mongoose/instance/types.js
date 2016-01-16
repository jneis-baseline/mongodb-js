module.exports = function() {
    var mongoose = require('mongoose');
    var typoSchema = require('../schema/types');
    var Typo = mongoose.model('Typo', typoSchema);

    var typo = new Typo({
        name: 'strings',
        living: true,
        age: 31,

        arrayof: ['strings1'],
        nested: {
             stuff: 'good'
        },
        
        binary: new Buffer(0),
        _someId: new mongoose.Types.ObjectId,
    });

    typo.arrayof.push('string2');

    // built-in Date methods are NOT hooked into mongoose change tracking
    //    doc.markModified must be used
    typo.updated.setMonth(3);
    typo.markModified('updated');
    
    // mixed types are also NOT hooked into mongoose change tracking
    typo.mixed = {
        any: {
            thing: 'I want'
        }
    };
    typo.markModified('mixed');    

    typo.save();

    Typo.find({'name': 'strings'}, function(err, typos) {
        console.log('exploring schema types:', typos);
    });
};