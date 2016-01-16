module.exports = function() {
    var Animal = require('../model/animal');
    var dog = new Animal({name: 'cujo', type: 'dog'});

    //dog.save();

    dog.findSimilarTypes(function(err, dogs) {
        console.log('animals of similar type:', dogs);
    });

    Animal.findByName('cujo', function(err, animals) {
        console.log('animals of same name:', animals);
    });
};
