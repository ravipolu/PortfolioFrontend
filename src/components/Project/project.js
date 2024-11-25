import React from "react";
import './project.css'
import movix from '../../assets/movix-logo.png'
import ecom from '../../assets/ecom.jpg'
import videocall from '../../assets/videocall.jpg'
import whats from '../../assets/whats.jpeg'
import port from '../../assets/port.PNG'

const Project =()=>{
    return(
        <div className="project-container" id="project-container">
            <h1>PROJECTS</h1>
            <div className="bar"></div>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            <div className="project-main">
                <ul className="project-lists">
                    <li className="project">
                        <div className="image">
                            <img src={movix} alt="Image"/>
                        </div>
                        <div className="project-about">
                            <h2>MOVIX</h2>
                            <p>adfdkhhhhhhhhhhhhhhhhhadvh vh dv hd vhdvvkjnd nj jn n n  n</p>
                            <a href="https://movix-app-peach-nine.vercel.app/" target="_blank"><button className="project_button">CASE STUDY</button></a>
                        </div>
                    </li>
                    <li className="project">
                        <div className="project-about">
                            <h2>MOVIX</h2>
                            <p>adfdkhhhhhhhhhhhhhhhhhadvh vh dv hd vhdvvkjnd nj jn n n  n</p>
                            <a href="https://star-ecommerce-nine.vercel.app/login" target="_blank"><button className="project_button">CASE STUDY</button></a>
                        </div>
                        <div className="image">
                            <img src={ecom} alt="Image"/>
                        </div>
                    </li>
                    <li className="project">
                        <div className="image">
                            <img src={port} alt="Image"/>
                        </div>
                        <div className="project-about">
                            <h2>MOVIX</h2>
                            <p>adfdkhhhhhhhhhhhhhhhhhadvh vh dv hd vhdvvkjnd nj jn n n  n</p>
                            <button className="project_button">CASE STUDY</button>
                        </div>
                    </li>
                    <li className="project">
                        
                        <div className="project-about">
                            <h2>MOVIX</h2>
                            <p>adfdkhhhhhhhhhhhhhhhhhadvh vh dv hd vhdvvkjnd nj jn n n  n</p>
                            <a href="https://web-rt-cfrontend.vercel.app/" target="_blank"><button className="project_button">CASE STUDY</button></a>
                        </div>
                        <div className="image">
                            <img src={videocall} alt="Image"/>
                        </div>
                    </li>
                    <li className="project">
                        <div className="image">
                            <img src={whats} alt="Image"/>
                        </div>
                        <div className="project-about">
                            <h2>MOVIX</h2>
                            <p>adfdkhhhhhhhhhhhhhhhhhadvh vh dv hd vhdvvkjnd nj jn n n  n</p>
                            <a href="" target="_blank"><button className="project_button">CASE STUDY</button></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Project;