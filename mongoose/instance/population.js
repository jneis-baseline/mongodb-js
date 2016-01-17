module.exports = function() {
    var Story = require('../model/story');
    var Author = require('../model/author');

    var jennifer = new Author({
        _id: 0,
        name: 'Jennifer',
        age: 29
    });

    // jennifer.save(function(err) {        
    //     var story1 = new Story({
    //         title: 'Once upon a timex',
    //         _creator: jennifer._id
    //     });

    //     story1.save();
    // });

    Story
        .findOne({title: 'Once upon a timex'})

        // populate the given field, with projection
        //    - for multiple fields, use space delimited path names,
        //      or call populate multiple times
        .populate('_creator', 'name')

        .populate({
            path: 'fans', // array
            match: {age: {$gte: 21}},
            select: 'name -_id',
            options: {limit: 5}
            // populate: {path: 'relatedStories'} // recursively populate stories
            // model: Author // for models from a separate db, or a different db instance
        })
        
        .exec(function(err, story) {
            console.log('story populated:', story);
        });
};
