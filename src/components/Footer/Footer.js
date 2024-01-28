import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
    return (
        <div>
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-4 pb-4">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>IIT BHU Varanasi, Uttar Pradesh , India</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>+919651609214</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>global.techify.info@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        {/* <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"/></a> */}
                                        <h2>Global Techify</h2>
                                    </div>
                                    <div class="footer-text">
                                        <p>Global Techify provides mentorship to students who want to stay updated with the latest trends in technology by connecting with industry experts, students can get valuable insights into the tech industry. </p>
                                    </div>
                                    <div class="footer-social-icon ">
                                        <span>Follow us</span>
                                        <div className="flex gap-2">
                                            
                                               <div className="bg-white w-fit rounded-full p-1">
                                        
                                        <FaXTwitter />
                                        </div>
                                    
                                        <div className="bg-white w-fit rounded-full p-1">
                                        <FaFacebookF /></div>
                                        <div className="bg-white w-fit rounded-full p-1">
                                        <FaInstagram /></div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>

                                        <li><Link to="/" style={{ textDecoration: 'none' }}><div className='nav-items'>Home</div></Link></li>
                                        <li><Link to="/Mentors" style={{ textDecoration: 'none' }}><div className='nav-items'>Mentor</div></Link></li>
                                        <li><Link to="/about" style={{ textDecoration: 'none' }}><div className='nav-items'>About</div></Link></li>
                                        <li><Link to="/contactus" style={{ textDecoration: 'none' }}><div className='nav-items'>Contact</div></Link></li>
                                        <li><Link to="/services" style={{ textDecoration: 'none' }}><div className='nav-items'>Services</div></Link></li>
                                        <li><Link to="/ourteam" style={{ textDecoration: 'none' }}><div className='nav-items'>Our Team</div></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2024, All Right Reserved <a href="http://localhost:3000/?#">Global Techify</a></p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li>Home</li>
                                        <li>Terms</li>
                                        <li>Privacy</li>
                                        <li>Policy</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;