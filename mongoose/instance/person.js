module.exports = function() {
    var Person = require('../model/person');
    var bad = new Person({name: {first: 'Walter', last: 'White'}});

    //bad.save();

    Person.findOne({'name.first': 'Walter'}, function(err, person) {
        console.log('accessing virtuals:', person.name.full);
    });
};
