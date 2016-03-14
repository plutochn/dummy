var memdb = require('memdb-client');
var p = memdb.Promise;
var mdbgoose = memdb.goose;

var playerSchema = new mdbgoose.Schema(
{
_id:String,
name:String,
money:Number,
items:[mdbgoose.SchemaTypes.Mixed],
},
{collection:'player'}
);

var player = mdbgoose.model('player',playerSchema);




