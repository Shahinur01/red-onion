import React from 'react';
import logo from '../../images/logo.png';
import "./Footer.css";

const Footer = () => {
    const today = new Date();
    const fullYear = today.getFullYear();
    return (
        <div className='mainFooter '>
            <div className="container">
                <div className="row footerSection">
                    <div className="col footerSection">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="">
                            <div className="footer-item">
                                <ul>
                                    <li>
                                        <a href="http://">About Online food</a>
                                    </li>
                                    <li>
                                        <a href="http://">Read our blog</a>
                                    </li>
                                    <li>
                                        <a href="http://">Sign up to deliver</a>

                                    </li>
                                    <li>
                                        <a href="http://">Add your restaurant</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="http://">Get help</a>
                                    </li>
                                    <li>
                                        <a href="http://">Read FAQs</a>
                                    </li>
                                    <li>
                                        <a href="http://">View all cities</a>
                                    </li>
                                    <li>
                                        <a href="http://">Restaurants near me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footerCopy">
                        <div className="copyright">
                            <p>Copyright &copy; {fullYear} Online food </p>
                        </div>
                        <div className="terms">
                            <ul>
                                <li><a href="http://">Privacy Policy.</a></li>
                                <li><a href="http://">Terms of Use</a></li>
                                <li><a href="http://">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;