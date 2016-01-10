var output = require('./cursor.output');

exports.findAll = function(db, callback) {
    var cursor = db.collection('restaurants').find();

    output(cursor, callback);
};
