var handle = function(callback) {
    return function(err, results) {
        console.log(results.result);
        callback();
    };
};

var updateOne = function(db, filter, ops, callback) {
    db.collection('restaurants').updateOne(filter, ops, handle(callback));
};

exports.updateField = function(db, callback) {
    // $set operator to set new value to fields
    // $currentDate operator to update date fields with current date
    updateOne(db,
        {"name": "Juni"},
        {
            $set: {"cuisine": "American (new)"},
            $currentDate: {"lastModified": true}
        },
        callback);
};

exports.updateEmbeddedField = function(db, callback) {
    updateOne(db,
        {"restaurant_id": "41156888"},
        {$set: {"address.street": "East 31st Street"}},
        callback);
};

exports.updateMultiple = function(db, callback) {
    db.collection('restaurants').updateMany(
        {"address.zipcode": "10016", "cuisine": "Other"},
        {
            $set: {"cuisine": "Category to be determined"},
            $currentDate: {"lastModified": true}
        },
        handle(callback)
    );
};

exports.replace = function(db, callback) {
    db.collection('restaurants').replaceOne(
        {"restaurant_id": "41704620"},
        {
            "name" : "Vella 2",
            "address" : {
               "coord" : [ -73.9557413, 40.7720266 ],
               "building" : "1480",
               "street" : "2 Avenue",
               "zipcode" : "10075"
            }
        },
        handle(callback)
    );
};
