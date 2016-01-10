module.exports = function(cursor, callback) {
    cursor.each(function(err, doc) {
        if (doc != null) {
            console.dir(doc);            
        } else {
            callback();
        }
    });
};
