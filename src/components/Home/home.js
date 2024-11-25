import React from "react";

import './home.css'

const Home = ()=>{

    return(
        <div id="home-container" className="home-container">
            <h1 className="heading">HEY, I'M <span>RAVI KUMAR</span></h1>
            <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
            <a href="#project-container">
                <button className="project_button_home">PROJECT</button>
            </a>
        </div>
    )
}

export default Home;