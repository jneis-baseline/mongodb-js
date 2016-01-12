var handle = function(callback) {
    return function(err, results) {
        console.log(results.result);
        callback();
    };
};

exports.delete = function(db, callback) {
    db.collection('restaurants').deleteOne({"borough": "Queens"}, handle(callback));
};

exports.deleteMultiple = function(db, callback) {
    db.collection('restaurants').deleteMany({"borough": "Manhattan"}, handle(callback));
};

exports.deleteAll = function(db, callback) {
    db.collection('restaurants').deleteMany({}, handle(callback));
};

exports.dropCollection = function(db, callback) {
    db.collection('restaurants').drop(function(error, response) {
        console.log(response ? "Deleted" : "Collection does not exist");
        callback();
    });
};
