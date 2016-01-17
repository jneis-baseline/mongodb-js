var express = require('express');
var app = express();

var mongoose = require('mongoose');
var uri = 'mongodb://db:27017/sriracha';

mongoose.connect(uri);

require('./models/user');
require('./models/post');

var admin = require('sriracha-admin');
var options = {
    username: 'admin',
    password: 'admin'
};

app.use('/admin', admin());

app.listen(3000);
