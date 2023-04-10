import React from 'react';
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import logo from "../../images/logo2.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="menuBar">
            <img src={logo} alt="" />
            <div className="authArea">
                <span> <GrCart /> </span>
                <Link className="login" to="/login">Login</Link>
                <Link className="signUp"  to="/signUp">Sign up</Link>
            </div>
        </div>
    );
};

export default Header;