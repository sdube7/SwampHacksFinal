const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
const Schema = mongoose.Schema;


const newAlbumObj = new Schema({

    artistName: {
        type: String
    },
    title: {
        type: String
    },
    releaseDate: {
        type: String
    },
    totalTracks: {
        type: Number
    },
    ID: {
        type: String
    }
});
// Thing in single quotes needs to be the same name as in collection
const BasicAlbum = mongoose.model('BasicAblum', newAlbumObj);
module.exports = BasicAlbum; 