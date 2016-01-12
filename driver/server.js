var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

var mongo = require('./mongo/indexes');

client.connect(url, function(err, db) {
    mongo.indexFields(db, function() {
        db.close();
    });
});
