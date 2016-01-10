var findAll = function(db, callback) {
    var cursor = db.collection('restaurants').find();

    cursor.each(function(err, doc) {
        if (doc != null) {
            console.dir(doc);            
        } else {
            callback();
        }
    });
};

module.exports = function(client, url) {
    client.connect(url, function(err, db) {
        findAll(db, function() {
            db.close();
        });
    });
};
