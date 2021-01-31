const { Double } = require('bson');
const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
const Schema = mongoose.Schema;

const newTrackObj = new Schema({

    artistName: {
        type: String
    },
    trackName: {
        type: String
    },
    duration: {
        type: String
    },
    ID: {
        type: String
    },
    popularityMetric: {
        type: String
    },
    previewURL: {
        type: String
    },
    trackNumber: {
        type: String
    }
});
  
// Thing in single quotes needs to be the same name as in collection
const BasicTrack = mongoose.model('BasicTrack', newTrackObj);
module.exports = BasicTrack; 