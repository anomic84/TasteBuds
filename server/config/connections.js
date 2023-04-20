const mongoose = require('mongoose');

// FIXME: update link
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/taste-buds'
);

module.exports = mongoose.connection;
