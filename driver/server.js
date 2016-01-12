var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

var mongo = require('./mongo/aggregate');

client.connect(url, function(err, db) {
    mongo.filterAndGroup(db, function() {
        db.close();
    });
});
