import React, { Component } from 'react';
import './LandingPage.css'
import Typical from 'react-typical';
import picture from './Page One 2019_Color_-13(1).jpg'
class LandingPage extends Component {
    render() {
        return (
            <div>
                <div id="Image">
                    <img src={picture} alt="picture" />
                </div>    
                    <div id='title'>
                        <span>
                            Hi, I'm Manav Shah
                
                </span>
                        <br />
                        <h3>
                            I'm a
                        <Typical
                                loop={Infinity}
                                wrapper='r'
                                steps={[
                                    ' Developer',
                                    2000,
                                    ' Hopeless Romantic',
                                    2000,
                                    'n Open Sourcer',
                                    2000,
                                    ' Story Teller',
                                    2000,

                                ]
                                }
                            ></Typical>
                        </h3>
                        <div class="box">
                            

                        </div>
                    </div>
                </div>
        )
    }
}

export default LandingPage;