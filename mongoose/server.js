var mongoose = require('mongoose');
var url = 'mongodb://db:27017/test';

mongoose.connect(url, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('connected');        
    }
});
