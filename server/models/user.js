const mongoose = require('mongoose');
const testUser = mongoose.Schema({
    name: {
        type: String,
        default: 'full Name',
        trim: true
    },
    mail: {
        type: String,
        default: 'mail',
        trim: true

    },
    age: {
        type: String,
        default: 'age'


    },
    city: {
        type: String,
        default: 'city',
        trim: true

    },
    phone: {
        type: String,
        default: 'phone',
        trim: true
    },
})

module.exports = mongoose.model('testUser', testUser);