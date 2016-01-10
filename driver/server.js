var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

var mongo = require('./mongo/find.sort');

client.connect(url, function(err, db) {
    mongo.findSort(db, function() {
        db.close();
    });
});
