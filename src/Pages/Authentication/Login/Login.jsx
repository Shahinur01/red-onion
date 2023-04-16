import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/logo2.png";
import "./Login.css";

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const [
        signInWithEmailAndPassword,
        user,error
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }


    if (user) {
        navigate(from,{replace:true});
    }

    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
        
    }


    // create sing in

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
    }

    return (
        <div className="loginBanner">
            
            <div className="">
                <div className="login-section">
                    <img src={logo} alt="" />
                    <form className='formField' onSubmit={handleSignIn}>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' />
                        <input type="submit" value="Login" />
                    </form>
                    {error?.message}
                    <Link className="alreadyAccount" to="/signup">Create new an account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;