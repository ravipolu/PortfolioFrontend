import React from "react";
import './footer.css'

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="footer">
                <div className="topic">
                    <h2>RAVI KUMAR</h2>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className="media">
                    <h2>SOCIAL</h2>
                    <div className="social-link">
                        insta, twitter, link
                    </div>
                </div>
            </div>
            <div className="topicdiv"></div>
            <p className="copyright">© Copyright 2024 . Made by <a href="./">Ravi Kuamr</a></p>
        </div>
    )
}

export default Footer;