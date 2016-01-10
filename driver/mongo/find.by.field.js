var output = require('./cursor.output');

var findByField = function(db, callback) {
    var cursor = db.collection('restaurants')
        .find({
            "borough": "Manhattan"
        });

    output(cursor, callback);
};

module.exports = function(client, url) {
    client.connect(url, function(err, db) {
        findByField(db, function() {
            db.close();
        });
    });
};
