import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import google from "./assets/google.png";
import email from "./assets/mail.png";
import india from "./assets/india.png";

const Login = ({ show, onClose, onSignupOpen }) => {
  if (!show) return null;

  const navigate = useNavigate();

  const handleSignupOpen = () => {
    if (onClose) onClose();
    if (onSignupOpen) onSignupOpen();
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        <h2>Login</h2>

        <form>
          <div className="phone-input">
            <img src={india} alt="India Flag" className="flag-icon" />
            <select className="country-code">
              <option value="+91">+91</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="input-field phone"
              required
            />
          </div>

          <button type="submit" className="otp-btn">
            Send One Time Password
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="email-btn">
            <img src={email} alt="Email Icon" className="email-icon" />
            Continue with Email
          </button>

          <button type="button" className="google-btn">
            <img src={google} alt="Google Icon" className="google-icon" />
            Sign in with Google
          </button>

          <p className="footer-text">
            New to Eatify?{" "}
            <span className="highlight" onClick={handleSignupOpen}>
              Create account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
