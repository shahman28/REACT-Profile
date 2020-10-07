import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (


            <div>

                <ul id="nav">
                    <p>Manav Shah's Personal Website</p>
                    <li class="one"><a href="/">Home</a></li>
                    <li class="two"><a href="https://www.linkedin.com/in/manav-shah28/" target="_blank">Linkedin</a></li>
                    <li class="three"><a href="/huffman">huffmanVisualizer</a></li>
                    <li class="four"><a href="#">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;