var handle = function(callback) {
    return function(err, result) {
        console.log(result);
        callback();
    };
};

exports.groupByField = function(db, callback) {
    db.collection('restaurants')
        .aggregate([
            {$group: {"_id": "$borough", "count": {$sum: 1}}}
        ])
        .toArray(handle(callback));
};

exports.filterAndGroup = function(db, callback) {
    db.collection('restaurants')
        .aggregate([
            {$match: {"borough": "Queens", "cuisine": "Brazilian"}},
            {$group: {"_id": "$address.zipcode", "count": {$sum: 1}}}
        ])
        .toArray(handle(callback));
};
