import React, { useState } from "react";
import "./header.css"
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import profile from '../../assets/profile.jpg'

const Header = () =>{

    const [menu,setMenu] = useState(false);

    const handleMenuClick = () =>{
        setMenu(!menu)
    }

    return(
        <div className="header">
            <div className="header__content">
                <div className="header__logo">
                    <div className="logo__image">
                        <img src={profile} alt="Img"/>
                    </div>
                    <span>Ravi kumar</span>
                </div>
                <div className="header__main"> 
                    <ul className="header__links">
                        <li className="link__wrapper">
                            <a href="#home-container" className="links">HOME</a>
                        </li>
                        <li className="link__wrapper">
                        <a href="#about-container" className="links">ABOUT</a>
                        </li>
                        {/* <li className="link__wrapper">
                        <a href="./#experience" className="links">EXPERIENCE</a>
                        </li> */}
                        <li className="link__wrapper">
                        <a href="#project-container" className="links">PROJECT</a>
                        </li>
                        <li className="link__wrapper">
                        <a href="#contact-container" className="links">CONTACT</a>
                        </li>
                    </ul>
                    <div className="menuui">{menu ? <IoMdClose onClick={handleMenuClick}/> : <IoMdMenu onClick={handleMenuClick}/>}</div>
                    <div>
                        {menu && 
                            (<div className="smallscreen">
                                <ul>
                                    <li><a href="#home-container">Home</a></li>
                                    <li><a href="#about-container">About</a></li>
                                    <li><a href="#project-container">Project</a></li>
                                    <li><a href="#contact-container">Contact</a></li>
                                </ul>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;