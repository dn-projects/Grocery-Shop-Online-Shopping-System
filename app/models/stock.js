var mongoose = require('mongoose');

module.exports = mongoose.model('Stock',
    {
        text:
        {
            type: String,
            default: ''
        }
    }
);
