const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    newsletter: {
        type: Boolean,
        required: true
    },

    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],

    discount: {
        type: Number
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
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);