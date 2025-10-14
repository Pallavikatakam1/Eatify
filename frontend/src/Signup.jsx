import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import google from "./assets/google.png";

const Signup = ({show, onClose}) => {
    if(!show) return null;

    const navigate = useNavigate();

    const handleLoginOpen = () => {
        if (onClose) onClose();
        navigate('/login');
    };

    return(
        <div className="signup-container">
            <div className="signup-box">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Username" required  className="input-field"/>
                    <input type="email" placeholder="Email" required  className="input-field"/>

                    <div className="terms">
                        <input className="checkbox" type="checkbox" id="terms" required />
                       <label htmlFor="terms">
                        I agree to the{" "}
                        <span className="highlight">Terms and Conditions</span>,{" "}
                        <span className="highlight">Terms of Service</span>,{" "}
                        <span className="highlight">Privacy Policy</span> and{" "}
                        <span className="highlight">Content Policy</span>
                        </label>
                    </div>
                    <button type="submit" className="signup-btn">Create Account</button>
                    <div className="divider">
                        <span>or</span>
                    </div>
                    <button type="button" className="google-btn">
                        <img src={google} alt="Google" />
                        Sign up with Google
                    </button>

                    <p className="footer-text">
                        Already have an account? <span className="highlight" onClick={handleLoginOpen}>Log In</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;