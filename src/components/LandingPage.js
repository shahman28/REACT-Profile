import React, { Component } from 'react';
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'>
                    <span>
                        PURE CSS
                </span>
                    <br />
                    <span>
                        PARALLAX PIXEL STARS
                </span>
                </div>
            </div>
        )
    }
}

export default LandingPage;