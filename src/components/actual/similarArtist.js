const { Double } = require('bson');
const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
const Schema = mongoose.Schema;

const newSimilarArtistObj = new Schema({

    artistName: {
        type: String
    },
    imageURL: {
        type: String
    },
    similarArtistDerivedFrom: {
        type: String
    },
    external_URL: {
        type: String
    },
    followers: {
        type: String
    },
    generes: {
        type: Array
    },
    ID: {
        type: String
    },
    popularity: {
        type: String
    },
    URI: {
        type: String
    }

});
  
// Thing in single quotes needs to be the same name as in collection
const SimilarArtist = mongoose.model('SimilarArtist', newSimilarArtistObj);
module.exports = SimilarArtist; 