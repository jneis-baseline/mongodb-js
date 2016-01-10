var output = require('./cursor.output');

var findByArrayField = function(db, callback) {
    var cursor = db.collection('restaurants')
        .find({
            "grades.grade": "B"
        });

    output(cursor, callback);
};

module.exports = function(client, url) {
    client.connect(url, function(err, db) {
        findByArrayField(db, function() {
            db.close();
        });
    });
};
