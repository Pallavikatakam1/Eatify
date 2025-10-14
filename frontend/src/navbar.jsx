import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./assets/Eatifylogo.png";
import location from "./assets/location.png";
import scrdown from "./assets/scrolldown.png";
import searchIcon from "./assets/search.png";
import cart from "./assets/cart.svg";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

const Navbar = () => {
  const locations = ["Raidurg", "Knowledge City", "Banjara Hills", "Gachibowli", "Madhapur"];
  const searches = [
    "Search for Biryani...",
    "Search for Pizza...",
    "Search for Desserts...",
    "Search for Ice Creams..."
  ];

  const [locIndex, setLocIndex] = useState(0);
  const [searchIndex, setSearchIndex] = useState(0);
  const [locText, setLocText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

   useEffect(() => {
    const currentLoc = locations[locIndex];
    let i = 0;
    let deleting = false;

    const interval = setInterval(() => {
      if (!deleting && i <= currentLoc.length) {
        setLocText(currentLoc.substring(0, i));
        i++;
      } else if (deleting && i >= 0) {
        setLocText(currentLoc.substring(0, i));
        i--;
      }

      if (i === currentLoc.length + 1) {
        setTimeout(() => (deleting = true), 1000);
      } else if (deleting && i < 0) {
        deleting = false;
        setLocIndex((prev) => (prev + 1) % locations.length);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [locIndex]);

  useEffect(() => {
    const currentSearch = searches[searchIndex];
    let i = 0;
    let deleting = false;

    const interval = setInterval(() => {
      if (!deleting && i <= currentSearch.length) {
        setSearchText(currentSearch.substring(0, i));
        i++;
      } else if (deleting && i >= 0) {
        setSearchText(currentSearch.substring(0, i));
        i--;
      }

      if (i === currentSearch.length + 1) {
        setTimeout(() => (deleting = true), 1000);
      } else if (deleting && i < 0) {
        deleting = false;
        setSearchIndex((prev) => (prev + 1) % searches.length);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [searchIndex]);

  const handleSignupOpen = () => {
    setShowSignup(true);
    setShowLogin(false); 
  };
  const handleLoginOpen = () => {
    setShowLogin(true);
    setShowSignup(false); 
  };
  const handleSignupClose = () => setShowSignup(false);
  const handleLoginClose = () => setShowLogin(false);

  return (
    <>
      <nav className="navbar">
        <img src={logo} className="Eatifylogo" alt="Eatify Logo" />

        <div className="box">
          <div className="location-box">
            <img src={location} className="location-icon" alt="Location Icon" />
            <div className="flow-container">
              <span>{locText}</span>
            </div>
            <img src={scrdown} className="scroll-icon" alt="Scroll Down Icon" />
          </div>

          <div className="search-bar">
            <img src={searchIcon} className="search-icon" alt="Search Icon" />
            <div className="flow-container">
              <span>{searchText}</span>
            </div>
          </div>
        </div>

        <div className="list">
          <ul className="nav-links">
            <li className="nav-item" onClick={handleSignupOpen}>
              Signup
            </li>
            <li className="nav-item" onClick={handleLoginOpen}>
              Login
            </li>
            <img src={cart} alt="Cart Icon" className="cart" />
          </ul>
        </div>
      </nav>

      <Signup show={showSignup} onClose={handleSignupClose} />
      <Login show={showLogin} onClose={handleLoginClose} />
    </>
  );
};

export default Navbar;
