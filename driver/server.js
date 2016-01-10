var express = require('express');
var app = express();

var db = require('./mongo/mongo');

db.insert();

app.route('/restaurants')
    
    .get(function(request, response) {
        response.json({
            message: 'hello'
        });
    });

app.listen(3000);
