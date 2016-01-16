module.exports = function() {
    var Parent = require('../model/parent');

    var parent = new Parent({
        children: [
            {name: 'Jessica'},
            {name: 'Sarah'}
        ]
    });

    parent.children[0].name = 'Jessie';

    // parent.save();

    Parent.findById('569a84630d5b8348047e76e7', function(err, parent) {
        var child = parent.children.id('569a84630d5b8348047e76e9');
        console.log('find child by id:', child);
        console.log('is it a new child?', child.isNew);
    
        parent.children.push({name: 'Jennifer'});
        console.log('new child:', parent.children[2]);
        console.log('is really new child?', parent.children[2].isNew);

        // each sub-doc has its own remove method
        child.remove();

        parent.save(function(err) {
            if (!err) console.log('now, new and removed children are saved');
        });
    });    
};
