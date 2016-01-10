var output = require('./cursor.output');

exports.findByEmbeddedField = function(db, callback) {
    var cursor = db.collection('restaurants')
        .find({
            "address.zipcode": "10075"
        });

    output(cursor, callback);
};
