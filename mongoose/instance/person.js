module.exports = function() {
    var Person = require('../model/person');
    var bad = new Person({name: {first: 'Walter', last: 'White'}});

    //bad.save();

    Person.findOne({'name.first': 'Walter'}, function(err, person) {
        console.log('accessing virtuals:', person.name.full);
    });

    // populating for queries:
    //new Person({name: {first: 'Who', last: 'Ghost'}, occupation: 'hauting', age: 200}).save();
    //new Person({name: {first: 'Maria', last: 'Ghost'}, occupation: 'cleaning', age: 100}).save();

    // queries:

    // find one by matching the predicate, projecting the given fields
    Person.findOne({'name.last': 'Ghost'}, 'name occupation', function(err, person) {
        console.log('ghost:', person);
    });

    // using JSON doc and Query obj
    var query = Person.findOne({'name.last': 'Ghost'});
    query.select('name occupation');
    query.exec(function(err, person) {
        console.log('ghost (query):', person);
    });

    // using a query builder
    Person
        .find({occupation: /ing/})
        .where('name.last').equals('Ghost')
        .where('age').gt(99).lt(201)
        .limit(10)
        .sort('-occupation')
        .select('name occupation')
        .exec(function(err, results) {
            console.log('ghost (query builder):', results);
        });
};
