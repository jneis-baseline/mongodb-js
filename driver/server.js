var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

var mongo = require('./mongo/find.by.field');

client.connect(url, function(err, db) {
    mongo.findByField(db, function() {
        db.close();
    });
});
