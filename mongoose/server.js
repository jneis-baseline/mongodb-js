var mongoose = require('mongoose');
var url = 'mongodb://db:27017/test';

mongoose.connect(url, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('connected');        
    }
});

var madMax = require('./data/mad-max-fury-road');
var Movie = require('./model/movie');

// instances of models are docs
var some = new Movie(madMax);

some.findSimilar(function(err, movies) {
    console.dir(movies);
});

Movie.findByTitle('Mad Max: Fury Road', function(err, movies) {
    console.dir(movies);
});
