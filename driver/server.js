var express = require('express');
var app = express();

app.route('/restaurants')
    
    .get(function(request, response) {
        response.json({
            message: 'hello'
        });
    });

app.listen(3000);
