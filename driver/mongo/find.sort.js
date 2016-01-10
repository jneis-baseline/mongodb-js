var output = require('./cursor.output');

var findSort = function(db, condition, ordering, callback) {
    var cursor = db.collection('restaurants').find(condition).sort(ordering);

    output(cursor, callback);
};

exports.findSort = function(db, callback) {
    // order: 1 (ascending) or -1 (descending)
    findSort(db, {"grades.score": {$gt: 80}}, {"borough": 1, "address.zipcode": -1}, callback);
};
