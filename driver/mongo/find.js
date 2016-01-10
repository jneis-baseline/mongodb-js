var output = require('./cursor.output');

var find = function(db, condition, callback) {
    var cursor = db.collection('restaurants')
        .find(condition);

    output(cursor, callback);
};

exports.findAll = function(db, callback) {
    find(db, {}, callback);
};

exports.findByField = function(db, callback) {
    find(db, {"borough": "Manhattan"}, callback);
};

exports.findByEmbeddedField = function(db, callback) {
    find(db, {"address.zipcode": "10075"}, callback);
};

exports.findByFieldInArray = function(db, callback) {
    find(db, {"grades.grade": "B"}, callback)
};

exports.findGreaterThan = function(db, callback) {
    find(db, {"grades.score": {$gt: 83}}, callback);
};
