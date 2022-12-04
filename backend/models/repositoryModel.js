const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repositorySchema = new Schema({
    avatar: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    }
}, { timestamps: true});

module.exports = mongoose.model('Repository', repositorySchema);