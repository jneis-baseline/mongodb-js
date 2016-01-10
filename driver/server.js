var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

var mongo = require('./mongo/update');

client.connect(url, function(err, db) {
    mongo.replace(db, function() {
        db.close();
    });
});
