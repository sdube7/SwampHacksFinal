import React, { Component } from 'react';
import Card, { AudioCard } from './cards';
import track1 from "../assets/track1.jpg"
import track2 from "../assets/track2.jpg"
import track3 from "../assets/track3.jpg"
import track4 from "../assets/track4.jpg"
import track5 from "../assets/track5.jpg"

import genre1 from "../assets/genre.jpg"
import genre2 from "../assets/genre2.jpg"
import genre3 from "../assets/genre3.jpg"
import genre4 from "../assets/genre4.png"
import genre5 from "../assets/genre5.jpg"



import img2 from "../assets/heartless.jpg";
import img3 from "../assets/RNB.png";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

class Cards extends Component {
    render() {
        var followers = this.props.data.totalFollowers + " Followers"
        var popularity = "Popularity: " + this.props.data.artistPopularity
        var monthlyListeners = "Monthly Listeners: " + this.props.data.monthlyListners
        var ID = "Spotify URI: " + this.props.data.ID
        var genre = ["", "", "", "", ""]
        var tracks = ["", "", "", "", ""]
        var similarArtists = ["", "", "", "", ""]
        var trackImages = [track1, track2, track3, track4, track5]
        var genreImages = [genre1, genre2, genre3, genre4, genre5]
        for (var i = 0; i < 5; i++) {
            if (this.props.data.genres.length > i) {
                genre[i] = this.props.data.genres[i]
                genre[i] = genre[i].substring(0, 1).toUpperCase() + genre[i].substring(1)
            }
        }
        console.log(this.props.track)
        tracks = this.props.track.map((t, i) => `${i + 1}. ${t.trackName}`)

        // for (var i = 0; i < 5; i++) {
        //     tracks[i] = (i + 1) + ". " + this.props.track[i].trackName
        // }

        similarArtists = this.props.similar.map((t, i) => `${i + 1}. ${t.artistName}`)
        // for (var i = 0; i < 5; i++) {
        //     similarArtists[i] = (i + 1) + ". " + this.props.similar[i].artistName
        // }

        console.log(this.props.data)
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={this.props.data.imageURL} imgtitle={this.props.data.name}
                        imgtext= {monthlyListeners}
                        imgtext2= {followers}
                        imgtext3= {popularity}
                        imgtext4= {ID} 
                        imgtext5=""
                        />
                    </div>
                    <div className="col-md-3">
                        <AudioCard imgsrc={trackImages[getRandomInt(5)]} imgtitle="Top Songs"
                        imgtext={tracks[0]}
                        audio = {this.props.track[0] ? this.props.track[0].previewURL : ''}
                        imgtext2= {tracks[1]}
                        audio2 = {this.props.track[1] ? this.props.track[1].previewURL : ''}
                        imgtext3= {tracks[2]}
                        audio3 = {this.props.track[2] ? this.props.track[2].previewURL : ''}
                        imgtext4= {tracks[3]}
                        audio4 = {this.props.track[3] ? this.props.track[3].previewURL : ''}
                        imgtext5= {tracks[4]}
                        audio5 = {this.props.track[4] ? this.props.track[4].previewURL : ''}
                        />
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={genreImages[getRandomInt(5)]} imgtitle="Associated Music Genres"
                        imgtext={genre[0]}
                        imgtext2={genre[1]}
                        imgtext3={genre[2]}
                        imgtext4={genre[3]}
                        imgtext5={genre[4]}
                        />
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={this.props.similar.length ? this.props.similar[0].imageURL : ''} imgtitle="Similar Artists"
                        imgtext= {similarArtists[0]}
                        imgtext2= {similarArtists[1]}
                        imgtext3= {similarArtists[2]}
                        imgtext4= {similarArtists[3]}
                        imgtext5= {similarArtists[4]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;