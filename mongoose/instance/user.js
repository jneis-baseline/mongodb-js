module.exports = function() {
    var User = require('../model/user');    

    var jennifer = new User({
        name: 'Jennifer',
        email: 'jennifer@gmail.com',
        genre: 'female',
        age: 29,
        phone: '123-456-7890',
        color: 'white'
    });

    //jennifer.save();

    var jen = new User({
        name: 'Jen',
        email: 'jennifer.gmail.com',
        genre: 'woman',
        age: 17,
        phone: '123-456-789',
        color: 'brown'
    });

    console.log('valid:', jennifer.validateSync());
    console.log('invalid:', jen.validateSync().toString());

    // doc validators only run when docs are saved (not when they're updated)

    // update validators are disabled by default
    //    option 'runValidators' enables update validators

    User.update({}, {color: 'pink'}, {runValidators: true}, function (err) {
        // 'err.errors' contains the validation error objs
        console.log('error message:', err.errors.color.message);
        console.log('field path:', err.errors.color.path);
        console.log('field value:', err.errors.color.value);
    });
};
