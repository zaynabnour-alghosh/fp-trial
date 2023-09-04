import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useEffect} from 'react';
import { useState } from 'react';
import orgLogo from '../../images/org-logo.png';
import HeroSection from '../../components/OrganizationComponents/HeroSection';
import ImpactSection from '../../components/OrganizationComponents/ImpactSection';
import MissionSection from '../../components/OrganizationComponents/MissionSection';
import EventSection from '../../components/OrganizationComponents/EventSection';
import TestimonialSection from '../../components/OrganizationComponents/TestimonialSection';
import FooterSection from '../../components/OrganizationComponents/FooterSection';
import ContactSection from '../../components/OrganizationComponents/ContactSection';
const OrganizationLanding=()=>{
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    const closeMenu = () => {
    setIsMenuOpen(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    const navbarClass = scrolling ? 'with-shadow' : 'navbar';
    return(
        <div className="page">

            <div className={`header ${navbarClass}`}>
                <img src={orgLogo} alt="logo" className="logoO"/>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <FaBars  className="menu"/>
                </div>
                <div className={`link nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#about-us" className="about" onClick={closeMenu}>About</a>
                    <a href="#impact" className="impact" onClick={closeMenu}>Impacts</a>
                    <a href="#mission" className="mission" onClick={closeMenu}>Missions</a>
                    <a href="#event" className="event" onClick={closeMenu}>Events</a>
                    <a href="#contact" className="contact" onClick={closeMenu}>Contact</a>
                    <Link to="/signup" className="signup-option" onClick={closeMenu}>Signup</Link>
                </div>
            </div>
            <div id="about-us">
            <   HeroSection/>
            </div> 
            <div id="impact">
                <ImpactSection/>
            </div>
            <div id="mission">
                <MissionSection/>
            </div>
            <EventSection/>
            <TestimonialSection/>
            <ContactSection/>
            <FooterSection/>
        </div>
    );
}
export default OrganizationLanding;
