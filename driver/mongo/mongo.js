var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

exports.connect = function() {
    MongoClient.connect(url, function(err, db) {
        console.log('Connected to DB');
        db.close();
    });
};

var insert = require('./insert');

exports.insert = function() {
    MongoClient.connect(url, function(err, db) {
        insert(db, function() {
            db.close();
        });
    });
};
