var mongoose = require('mongoose');
var uri = 'mongodb://db:27017/test';
var options = {
    db: {native_parser: true},
    server: {poolSize: 5},
    replset: {rs_name: 'replicaSetName'},
    // user: 'username',  // for authentication
    // pass: 'password'
};

mongoose.connect(uri, options);

//require('./instance/blog')();
//require('./instance/animal')();
//require('./instance/person')();
//require('./instance/options')();
//require('./instance/types')();
//require('./instance/tank')();
//require('./instance/parent')();
//require('./instance/user')();
require('./instance/population')();
