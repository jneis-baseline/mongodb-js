var output = require('./cursor.output');

exports.findByArrayField = function(db, callback) {
    var cursor = db.collection('restaurants')
        .find({
            "grades.grade": "B"
        });

    output(cursor, callback);
};
