import React, { Component } from 'react';
import './about-content.css'
import HtmlCssJs from '../../assets/images/html-css-js-icon.png';
import ReactRedux from '../../assets/images/react-redux-icon.png';
import Php from '../../assets/images/php_mysql.png';
import background from '../../assets/images/aboutpage.jpeg';




class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container about-page">
                <div className="about-container">
                    <h1 className="about-header">About</h1>
                    <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita ducimus neque tempore exercitationem rem reiciendis alias eligendi inventore debitis vero! Aspernatur officia quae minus. Fugit veniam labore blanditiis aperiam.</p>
                    <h3>Technologies used:</h3>
                    <div className="tech-icons">
                        <img src={HtmlCssJs} alt="html css javascript icons" width="140px" />
                        <img className="react-redux-icon" src={ReactRedux} alt="react redux icon" width="120px" />
                        <img className="react-redux-icon" src={Php} alt="php, mysql icon" width="120px" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;