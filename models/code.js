const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodesSchema = new Schema({
    code: {
        type: String
    },

    discount: {
        type: Number
    },

    active: {
        type: Boolean
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Code', CodesSchema);