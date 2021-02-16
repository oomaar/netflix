import React from 'react';
import "./styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h3 className="footer__title">Questions? Contact us</h3>

            <div className="footer__rows">
                <div className="footer__row">
                    <p className="footer__link">FAQ</p>
                    <p className="footer__link">Investor Relations</p>
                    <p className="footer__link">Privacy</p>
                    <p className="footer__link">Speed Test</p>
                </div>
                <div className="footer__row">
                    <p className="footer__link">Help Center</p>
                    <p className="footer__link">Jobs</p>
                    <p className="footer__link">Cookie Preferences</p>
                    <p className="footer__link">Legal Notices</p>
                </div>
                <div className="footer__row">
                    <p className="footer__link">Account</p>
                    <p className="footer__link">Ways to Watch</p>
                    <p className="footer__link">Coroporate Information</p>
                    <p className="footer__link">Netflix Originals</p>
                </div>
                <div className="footer__row">
                    <p className="footer__link">Media Center</p>
                    <p className="footer__link">Terms of Use</p>
                    <p className="footer__link">Contact Us</p>
                </div>
            </div>

            <h1 className="footer__getInTouch">Get In Touch With Me !</h1>

            <div className="footer__socialIcons">
                <a href="https://github.com/oomaar" className="footer__socialIcon">
                    <img className="footer__socialImage" src="/images/social/github.png" alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/omar-hassan-8b1869137" className="footer__socialIcon">
                    <img className="footer__socialImage" src="/images/social/in.png" alt=""/>
                </a>
                <a href="https://www.facebook.com/omarhassan16694" className="footer__socialIcon">
                    <img className="footer__socialImage" src="/images/social/facebook.png" alt=""/>
                </a>
            </div>
        </div>
    )
};

export default Footer;
