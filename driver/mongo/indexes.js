var options = null;

var handle = function(callback) {
    return function(err, results) {
        console.log(results);
        callback();
    };
};

exports.indexField = function(db, callback) {
    // ordering: 1 (ascending), -1 (descending)
    db.collection('restaurants').createIndex(
        {"cuisine": 1},
        options,
        handle(callback)
    );
};

exports.indexFields = function(db, callback) {
    db.collection('restaurants').createIndex(
        {"cuisine": 1, "address.zipcode": -1},
        options,
        handle(callback)
    );
};
