module.exports = function() {
    var Tank = require('../model/tank');
    var small = new Tank({size: 'small', name: 'tank1'});

    // small.save(function(err, tank) {
    //     if (!err) {
    //         console.log('small tank saved:', tank);
    //     }
    // });

    // Tank.create({size: 'big', name: 'tank2'}, function(err, tank) {
    //     if (!err) {
    //         console.log('big tank saved:', tank);
    //     }
    // });
    
    // Tank.create({size: 'large', name: 'tank3'});

    Tank.find(function(err, tanks) {
        console.log('find all tanks:', tanks);
    });

    Tank.find({size: 'small'}, function(err, tanks) {
        console.log('find small tank:', tanks);
    });

    Tank.find({size: 'small'}).exec(function(err, tanks) {
        console.log('find-exec small tank:', tanks);
    });

    Tank.find().where({name: 'tank1'}).exec(function(err, tanks) {
        console.log('find-where-exec small tank:', tanks);
    });

    Tank.findOne({size: 'big'}, function(err, tank) {
        console.log('find-one big tank:', tank);
    });

    Tank.findById('569a7b97720a50eb0253af8e', function(err, tank) {
        console.log('find by id:', tank);
        tank.size = 'bigger';
        tank.save(); // triggers an update, since doc was found by id
    });    

    // update one doc without returning it to the app
    Tank.update({name: 'tank2'}, {size: 'larg'}, function(err) {
        if (!err) console.log('big tank updated');
    });

    Tank.findOneAndUpdate({name: 'tank2'}, {size: 'large'}, function(err, tank) {
        if (!err) console.log('big tank updated:', tank);
    });

    // updates do not execute any hook/validation
    //    if hook/validation is needed, query docs by id and save them

    Tank.remove({name: 'tank3'}, function(err) {
        if (!err) console.log('large tank removed');
    });
};
