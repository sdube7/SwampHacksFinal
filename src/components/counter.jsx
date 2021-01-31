import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d',
    };
    
    styles = {
        fontSize: 30,
        fontWeight: "bold"
    };

    render() { 
        return (
            <div>
                <div>
                    <img src = {this.state.imageUrl} width="200" className="img-thumbnail mx-auto m-5" alt =""/>
                </div>
                <div>
                    <span style={this.styles} align="center" className="badge badge-primary m-2">The Weeknd</span>
                </div>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;