const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema( {
    name: {
        type: String,
        required: true,
        maxlength:15
    },
    message: {
        type: String,
        required: true,
        maxlength:40
    },
    createdAt: {
    type: Date,
    default: Date.now()
    }

    

})

const Feed = mongoose.model('Feed', feedSchema)

module.exports = {
    Feed
}