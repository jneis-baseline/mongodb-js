var client = require('mongodb').MongoClient;
var url = 'mongodb://db:27017/test';

require('./mongo/find.by.field')(client, url);
