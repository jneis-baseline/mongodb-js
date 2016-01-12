var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

var mongo = require('./mongo/delete');

client.connect(url, function(err, db) {
    mongo.delete(db, function() {
        db.close();
    });
});
