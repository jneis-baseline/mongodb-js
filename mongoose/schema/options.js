var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = {
    //bufferCommands: false, // buffers commands when connection is down (if autoReconnect is false)
    
    //capped: 1024,         // restricts (circular) collections to a max size (in bytes)
    
    id: false,              // disables id getter 
    
    minimize: false,        // stores empty objects (if they're not provided at insertion)
    
    read: 'nearest',        // which members of the replica-set the driver should attempt to read

    safe: {                 // defaults to true (errors are returned to callbacks)
        j: 1,               // guarantees that any write is commited to journal,
        w: 2,               // at least 2 replicas,
        wtimeout: 10000     // with a timeout
    },                      // errors are still passed back to callbacks

    strict: 'throw', // throws error saving values passed to models and not specified by schemas (defaults to true)

    toObject: {             // converts docs into plain js objs
        getters: true,      // use path and virtual getters
        virtuals: false,    // ignore virtuals
        minimize: true,     // remove empty objs
        transform: function(doc, ret, opts) {   // applies to resulting js objs
            delete ret._id;
        }
    },

    typeKey: '$type',       // changes keyword for schema type declaration, in order to use 'type' as key

    validationBeforeSave: false, // skip default validation before saving doc (allows to save invalid docs)
};

var schema = new Schema({
    field: {
        subfield: String
    }
}, options);

// disable index auto creation on production (for performance idreasons)
//    call it programatically through the model (Model.ensureIndexes(callback))
schema.set('autoIndex', false);

module.exports = schema;
