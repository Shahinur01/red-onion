import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../images/logo2.png";
import "./Header.css";

const Header = () => {
    const  [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div className="menuBar">
            <Link className='logo' to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="authArea">
                <span> <GrCart /> </span>
                
                {
                    user ? <Link to="/" onClick={handleSignOut} className="login">Sign out</Link> : <Link className="login" to="/login">Login</Link>
                }
                
                
                <Link className="signUp" to="/signUp">Sign up</Link>
            </div>
        </div>
    );
};

export default Header;