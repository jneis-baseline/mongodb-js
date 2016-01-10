var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

var mongo = require('./mongo/find');

client.connect(url, function(err, db) {
    mongo.findGreaterThan(db, function() {
        db.close();
    });
});
