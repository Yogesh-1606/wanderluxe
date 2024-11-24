import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up
  const [error, setError] = useState(null); // State for displaying login errors

  const toggleNavbar = () => setIsNavbarActive(!isNavbarActive);
  const closeNavbar = () => setIsNavbarActive(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setIsLogin(true); // Reset to Login state when modal is toggled
    setError(null); // Clear previous error messages
  };

  const handleLoginSignup = () => {
  
    if (isLogin) {
      const username = document.querySelector('input[type="text"]').value;
      const password = document.querySelector('input[type="password"]').value;

      // Basic check for "correct" credentials if the password and user  name are correct or not
      if (username === 'ABC' && password === '1234') {
        setIsLoggedIn(true); // Mark the user as logged in
        setShowModal(false); //Mark 
        setError(null);
      } else {
        setError('Incorrect username or password.');
      }
    } else {
      // For SignUp (Just marking the user as "signed up" for now)
      setIsLoggedIn(true); // Mark the user as logged in
      setShowModal(false);
    }
  };

  const handleUserClick = () => {
    if (!isLoggedIn) {
      toggleModal(); // If not logged in, open the login popup 
    }
     else {
      
      
    }
    closeNavbar();
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Log the user out
  };

  return (
    <section className='Navbarsection'>
      <header className="Header flex">
        <div className="logoDiv">
          <Link to="/Home" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> WanderLuxe
            </h1>
          </Link>
        </div>

        <div className={isNavbarActive ? 'Navbar activeNavbar' : 'Navbar'}>
          <ul className="NavLists flex">
            <li className="NavItem">
              <Link to="/Home" className="NavLink" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="NavItem">
              <Link to="/Trending Packages" className="NavLink" onClick={closeNavbar}>Trending Packages</Link>
            </li>
            <li className="NavItem">
              {/* Show either login/signup button or user account button */}
              {isLoggedIn ? (
                <>
                  <Link to="/User" className="NavLink">User</Link>
                  <button className='btn' onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <button className='btn' onClick={handleUserClick}>Login/Signup</button>
              )}
            </li>
          </ul>

          <div onClick={closeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={toggleNavbar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>

      {showModal && (
        <div className="modalOverlay" onClick={toggleModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            {isLogin ? (
              <>
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button className="btn loginBtn" onClick={handleLoginSignup}>Login</button>
                {error && <p className="error-message">{error}</p>}
                <p>Don't have an account? <span onClick={() => setIsLogin(false)} className="signupLink">Sign up here</span></p>
              </>
            ) : (
              <>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button className="btn signupBtn" onClick={handleLoginSignup}>Sign Up</button>
                <p>Already have an account? <span onClick={() => setIsLogin(true)} className="signupLink">Log in here</span></p>
              </>
            )}
            <AiFillCloseCircle className="closeModalIcon" onClick={toggleModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
