const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Data', DataSchema);
