/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var app = express();
const Artist = require('./artist');
const Track = require('./track');
const SimilarArtist = require('./similarArtist');
const Album = require('./album')
var body_parser = require('body-parser');
app.use(body_parser.json())
// const BasicAlbum = require('./models/album');
// const AdvancedAlbum = require('./models/artist');
// const BasicTrack = require('./models/artist');
// const AdvancedTrack = require('./models/artist');
// const BasicArtist = require('./models/artist');

const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const { title } = require('process');

var dummyAccessToken;
var hello;

const mongoose = require('mongoose');
//connect to database
const dbURI = 'mongodb+srv://swamphacksSquad:spotify1234@cluster0.13ce6.mongodb.net/SwampHacks2021?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3003))
  .catch(err => console.log(err));

app.post('/single-artist', (req, res) => {
  console.log(req.body)
  Artist.findOne({ name: req.body.query })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})
app.post('/single-track', (req, res) => {
  Track.find({ artistName: req.body.query })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.post('/similar-artist', (req, res) => {
  SimilarArtist.find({ similarArtistDerivedFrom: req.body.query })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.get('/single-album', (req, res) => {
  Album.find({ artistName: 'Travis Scott' })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
})

console.log('Listening on 8888');

//console.log('/#access_token=' + access_token);


app.listen(8888);