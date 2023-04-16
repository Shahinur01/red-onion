import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/logo2.png";

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate("/login")
    }

    // create user 
    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Your Two password must be same");
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }
    // input set value
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    // password
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    // confirm password
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
    }
    return (
        <div className="loginBanner">
            <div className="">
                <div className="login-section">
                    <img src={logo} alt="" />
                    <form className='formField' onSubmit={handleCreateUser}>
                        <input type="text" name="name" id="" placeholder='Name' />
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' />
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirmPassword" placeholder='Confirm password' id="" />
                        <input type="submit" value="Sign in" />
                    </form>
                    <p>{error}</p>
                    <Link className="alreadyAccount" to="/login">Already have an account</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;