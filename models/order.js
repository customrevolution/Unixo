const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({

    orderId: {
        type: String
    },

    status: {
        type: String
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    kicks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Kick'
        }
    ],

    price: {
        type: Number
    },

    anonymous: {
        type: Boolean
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    phone: {
        type: String
    },

    area: {
        type: String
    },

    city: {
        type: String
    },

    address: {
        type: String
    },

    neighbourhood: {
        type: String
    },

    arrival: {

    },

    date: {
        type: String
    },

    additionalInfo: {
        type: String
    },

    sizes: {
        type: [String]
    }
})


module.exports = mongoose.model('Order', OrdersSchema);