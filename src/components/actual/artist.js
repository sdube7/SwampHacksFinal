const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
const Schema = mongoose.Schema;


const albumObjectOriginal = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        
    },
    totalTracks: {
        type: String
    },
    ID: {
        type: String
    },
    imageURL: {
        type: String
    },
    popularityMetric: {
        type: String
    },
    recordLabel: {
        type: String
    }
    
});

const albumObjectAdditional = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    },
    recordLabel: {
        type: String
    }
    ,
    popularityMetric: {
        type: String 
    }
});
const trackObject = new Schema({
    name: {
        type: String,   
        required: true
    },
    imageURL: {
        type: String
    },
    label: {
        type: String
    },
    popularityMetric: {
        type: String
    },
    trackDuration: {
        type: String
    },
    explicit: {
        type: Boolean
    },
    ID: {
        type: String
    },
    previewURL: {
        type: String
    },
    trackNumber: {
        type: String
    },
    danceabilityMetric: {
        type: Number
    },
    energyMetric: {
        type: Number
    },
    loudnessMetric: {
        type: Number
    },
    speechiness: {
        type: Number
    },
    acousticness: {
        type: Number
    },
    instrumentalness: {
        type: Number
    },
    liveness: {
        type: Number
    },
    valence: {
        type: Number
    }, 
    tempo: {
        type: Number
    }
    
});
const artistObject = new Schema({
    name: {
        type: String
    },
    ID: {
        type: String,
        required: true
    },
    totalFollowers: {
        type: String
    },
    genres: {
        type: Array
    },
    imageURL: {
        type: String
    },
    artistPopularity: {
        type: String
    }
    // albums: 
    //     [albumObjectOriginal]
    // ,
    // albumInfoPlus: 
    //     [albumObjectAdditional]
    // ,
    // tracks: 
    //     [trackObject]
    // ,
    // trackStatistics:
    //     [trackObject]
    
});

// const newArtistObj = new Schema({
//     name: {
//         type: String
//     },
//     ID: {
//         type: String
//     },
//     totalFollowers: {
//         type: String
//     }, 
//     genres: {
//         type: Array
//     },
//     imageURL: {
//         type: String
//     },
//     artistPopularity: {
//         type: String
//     }
 
// });
// const newAlbumObj = new Schema({
//     title: {
//         type: String
//     },
//     releaseDate: {
//         type: String
//     },
//     totalTracks: {
//         type: Number
//     },
//     ID: {
//         type: String
//     }
// });
// const newAlbumExtraObj = new Schema({
//     title: {
//         type: String
//     },
//     imageURL: {
//         type: String
//     },
//     albumLabel: {
//         type: String
//     },
//     popularityMetric: {
//         type: String
//     }
// });
// const newTrackObj = new Schema({

//     trackName: {
//         type: String
//     },
//     duration: {
//         type: String
//     },
//     ID: {
//         type: String
//     },
//     popularityMetric: {
//         type: String
//     },
//     previewURL: {
//         type: String
//     },
//     trackNumber: {
//         type: String
//     }
// });
// const newTrackAdditionalObj = new Schema({
    
//     name: {
//         type: String
//     },
//     danceabilityMetric: {
//         type: String
//     },
//     energyMetric: {
//         type: String
//     },
//     loudness: {
//         type: String
//     },
//     speechiness: {
//         type: String
//     },
//     acousticness: {
//         type: String
//     },
//     instrumentalness: {
//         type: String
//     },
//     liveness: {
//         type: String
//     },
//     valence: {
//         type: String
//     },
//     tempo: {
//         type: String
//     }
// });

// const artistObject = new Schema({
//     // artistInfo: {
//     //     type: newArtistObj
//     // },
//     newAlbumArr: {
//         type: Array
//     },
//     newAlbumInfoPlus: {
//         type: Array
//     },
//     topSongsArr: {
//         type: Array
//     },
//     topSongsAddArr: {
//         type: Array
//     }
// });
// Thing in single quotes needs to be the same name as in collection
const Artist = mongoose.model('artist', artistObject);
// const Track = mongoose.model('track', trackObject);
// const Album = mongoose.model('albumBasic', albumObjectOriginal);
// const BasicAlbum = mongoose.model('album', newAlbumObj);
// const AdvancedAlbum = mongoose.model('albumAdvance', newAlbumExtraObj);
// const BasicTrack = mongoose.model('basicTrack', newTrackObj);
// const AdvancedTrack = mongoose.model('advancedTrack', newTrackAdditionalObj);
// const BasicArtist = mongoose.model('basicArtist', newArtistObj);

module.exports = Artist; 
// module.exports = Track;
// module.exports = Album;
// module.exports = AdvancedTrack;
// module.exports = BasicArtist;
// module.exports = BasicTrack;
// module.exports = BasicAlbum;
// module.exports = AdvancedAlbum;