import React from "react";
import { useState,useEffect } from "react";
import logoS from "../../assets/logo-secondary.svg";
import logoP from "../../assets/logo-white.svg";

import { BsCheck2Circle,BsInstagram} from 'react-icons/bs';
import {FaPhone} from 'react-icons/fa';
import {MdEmail,MdLocationPin} from 'react-icons/md';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import Logo from "../../components/Logo";
import illustration from "../../images/illustration.png"
import "./style.css";
import FadeIn from "react-fade-in";

const LandingPage=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [code,setCode]=useState('');
    const [showLogo,setShowLogo]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setShowLogo(false);
        },1500);
    },[])
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    const closeMenu = () => {
    setIsMenuOpen(false);
    };
    const generateRandomCode=()=>{
        const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const length = 10;
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
            result += alphanumericChars.charAt(randomIndex);
        }
        setCode(result);
        console.log(result);
        
    }
    return(
        <>
            <div className="main">
                {showLogo?
                 <div className='logo-container'>
                    <Logo />
                </div>
                :
                <div className='hero'>
                    <div className="header">
                        <img src={logoP} alt="logo" className="logoP"/>
                        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <FaBars  className="menu"/>
                        </div>
                        <div  className={`link nav-links ${isMenuOpen ? 'open' : ''}`}>
                            <a href="#about-us" className="about" onClick={closeMenu}>About Us</a>
                            <a href="#"className="start" onClick={closeMenu}>Get Started</a>
                            <a href="#contact-us"className="contact" onClick={closeMenu}>Contact Us</a>
                        </div>
                    </div>
                    <div className="hero-content">
                        <div className="about-us">
                            <div className='landing'>
                                <h1>VOLUNTEA</h1>
                                <h2>Your Way </h2>
                                <h2>to Manage</h2>
                                <h2>Your Community</h2>
                                <div>
                                    <button className="btnStart">START NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="illustration-img">
                            <img src={illustration} alt="illustration"  className="home-img"/>
                        </div>
                    </div>
                    <div className="detail-content">
                        <div className="about-details">
                            <div className="about-text" id="about-us">
                                <h2>About Us</h2>
                                <div className="after"></div>
                                <p>Voluntea is a management software that helps organizations 
                                    manage their work, schedules, and progress in a 
                                    centralized location, making it easier to 
                                    coordinate and communicate with volunteers. 
                                    Voluntea management software typically includes features such as 
                                    volunteer registration, scheduling, communication, etc.
                                </p>
                                <h3>Features</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <div className="lst">
                                            <div><BsCheck2Circle className="check"/>&nbsp;Volunteers are notified about new opportunities</div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;Approve or reject applications requests</div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;View volunteers information </div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;Add volunteers to groups</div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;So much more</div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-content">
                        <div className="contact-details">
                            <div className="contact-form" id="contact-us">
                                <h2>Get in Touch</h2>
                                <div className="after"></div>
                                <p>Please fill out the form below to send us an email 
                                    and we will get back to you as soon as possible.
                                </p>

                                <div className="contact-info">
                                   <div className="contact-left">
                                        <div className="row">
                                            <div className="contact-input">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className="contact-input">
                                                <input type="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <textarea name="contact-message" cols="51" rows="10" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                   </div>  
                                </div>
                            </div>
                            <div className="contact-right">
                                <h2>Contact Info</h2>
                                <div className="info-details">
                                    <div className="info">
                                        <div className="icon-top">
                                            <MdLocationPin size={20} />
                                            <h3>Address</h3>
                                        </div>
                                        <div>Beirut, Lebanon</div>
                                    </div>
                                    <div className="info">
                                        <div className="icon-top">
                                            <FaPhone size={20} />
                                            <h3>Phone</h3>
                                        </div>
                                        <div>+ (961) 78 845418 </div>
                                    </div>
                                    <div className="info">
                                        <div className="icon-top">
                                            <MdEmail size={20} />
                                            <h3>Email</h3>
                                        </div>
                                        
                                        <div>info_voluntea@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="social">
                            <FaFacebookSquare size={28}/>
                                <BsInstagram  size={28}/>
                                <AiOutlineLinkedin  size={30}/>
                            </div>
                            <h2>COPYRIGHT &copy;</h2>
                        </div>
                    </div>
                    
                }
                
                
                {/* <h1>LANDING PAGE OF VOLUNTEA</h1>
                <button onClick={generateRandomCode}>Generate a code for your organization</button>
                <p>Organization's Code:{code}</p> */}
            </div>
        </>
    );
}
export default LandingPage;