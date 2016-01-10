var output = require('./cursor.output');

exports.findSort = function(db, callback) {
    var condition = {"grades.score": {$gt: 80}};

    // order: 1 (ascending) or -1 (descending)
    var ordering = {"borough": 1, "address.zipcode": -1};

    var cursor = db.collection('restaurants').find(condition).sort(ordering);

    output(cursor, callback);
};
