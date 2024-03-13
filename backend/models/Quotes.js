const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Quotes', quotesSchema);
