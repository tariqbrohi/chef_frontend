let instances = require('./instance');
let mongoose = instances.mongoose;
let Schema = instances.Schema;
let User = require('./user');
const post = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    description: {type: String, default: ''},
    img: {type: String, default: ''},
    created: {type: Date, default: Date.now},
    likes: [{user:
        {type: Schema.Types.ObjectId, ref: "User"}
    }],
    comments: [{user: 
        {type: Schema.Types.ObjectId, ref: "User"}
        ,text: {type: String, default: ''}
    }]
})

module.exports = mongoose.model("Post", post);

