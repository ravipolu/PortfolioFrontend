import React from "react";
import './aboutme.css'

const Aboutme = () =>{
    return (
        <div className="about-container" id="about-container">
            <div className="about-text">
                <h1>ABOUT ME</h1>
                <div className="bar"></div>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                <div className="section">
                <div className="detail">
                    <h1>Get to Know me!</h1>
                    <p>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                       I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
                       I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </p>
                    <button className="contact">CONTACT</button>
                </div>
                <div className="skills">
                    <h2>My Skills</h2>
                    <ul className="skillList">
                        <li className="list">HTML</li>
                        <li className="list">CSS</li>
                        <li className="list">JavaScript</li>
                        <li className="list">React</li>
                        <li className="list">Express</li>
                        <li className="list">Node</li>
                        <li className="list">MongoDB</li>
                        <li className="list">Kafka</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="about-profile"></div>
        </div>
    )
}

export default Aboutme;