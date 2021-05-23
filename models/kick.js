const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KicksSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    image: [
        {
            type: String,
            required: true
        }
    ],


    price: {
        type: Number,
        required: true
    },

    shopDescription: {
        type: String
    },

    size: {
        type: Number
    },

    colection: {
        type: Schema.Types.ObjectId,
        ref: 'Colection'
    },

    shopId: {
        type: String,
        required: true
    },

    size: {
        type: String
    },

    date: {
        type: String
    }

})


module.exports = mongoose.model('Kick', KicksSchema);