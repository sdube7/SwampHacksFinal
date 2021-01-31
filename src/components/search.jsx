import React from 'react';
import "./search.css";
import JSONDATA from "./MOCK_DATA.json";
import {useState} from 'react';

function Search(props){
    const [searchTerm, setSearchTerm] = useState("");

    function search() {
        fetch('/single-artist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: searchTerm})
        }).then(response => response.json()).then(data => {
            props.setData(data)
            props.setVisible(true)
            console.log(data)
        })

        fetch('/single-track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: searchTerm})
        }).then(response => response.json()).then(track => {
            if (track[0] == null) {
                alert("Not a valid input, please try again")
                props.setVisible(false)
            }
            props.setTrack(track)
            console.log(track)
        })

        fetch('/similar-artist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: searchTerm})
        }).then(response => response.json()).then(similar => {
            props.setSimilar(similar)
            console.log(similar)
        })


    }

    return (
        <div className="App">
            <div className="inputCss">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
            </div>
            <div className="ButtonCss">
                <button onClick={search}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Search;