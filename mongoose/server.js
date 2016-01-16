var mongoose = require('mongoose');
mongoose.connect('mongodb://db:27017/test');

var blogSchema = require('./schema/blog');

//console.log('blog schema:', blogSchema);

var Animal = require('./model/animal');
var dog = new Animal({name: 'cujo', type: 'dog'});

//dog.save();

dog.findSimilarTypes(function(err, dogs) {
    console.log('animals of similar type:', dogs);
});

Animal.findByName('cujo', function(err, animals) {
    console.log('animals of same name:', animals);
});

var Person = require('./model/person');
var bad = new Person({name: {first: 'Walter', last: 'White'}});

//bad.save();

Person.findOne({'name.first': 'Walter'}, function(err, person) {
    console.log('accessing virtuals:', person.name.full);
});

var schema = require('./schema/options');
var Any = mongoose.model('Any', schema);
var any = new Any({field: {subfield: 'value'}});

//any.save();

Any.findOne({'field.subfield': 'value'}, function(err, result) {     
    // id undefined due to schema options 'id: false'
    console.log('accessing id:', result.id);
});
