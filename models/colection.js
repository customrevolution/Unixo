const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColectionsSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    kicks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Kick'
        }
    ],

    collectionId: {
        type: String,
        required: true
    },

    images: [
        {
            type: String
        }
    ]
})


module.exports = mongoose.model('Colection', ColectionsSchema);