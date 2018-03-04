const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Trip: Number,
    SOC: Number
});

module.exports = mongoose.model('Trip', tripSchema);