var output = require('./cursor.output');

exports.findByField = function(db, callback) {
    var cursor = db.collection('restaurants')
        .find({
            "borough": "Manhattan"
        });

    output(cursor, callback);
};
