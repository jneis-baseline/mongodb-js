var output = require('./cursor.output');

var findByEmbeddedField = function(db, callback) {
    var cursor = db.collection('restaurants')
        .find({
            "address.zipcode": "10075"
        });

    output(cursor, callback);
};

module.exports = function(client, url) {
    client.connect(url, function(err, db) {
        findByEmbeddedField(db, function() {
            db.close();
        });
    });
};
