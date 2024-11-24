import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Account from './components/Account/Account';
import List from './components/List/List';  

const App = () => {
  const [query, setQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home setQuery={setQuery} /> 
              <List query={query} />
            </>
          } 
        /> 

        <Route 
          path="/Home" 
          element={
            <>
              <Home setQuery={setQuery} /> 
              <List query={query} />
            </>
          } 
        /> 

        <Route path="/Trending Packages" element={<Main />} />

        {/* Conditionally render the Account page or redirect to Home if not logged in */}
        <Route 
          path="/User"  
          element={isLoggedIn ? <Account setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} 
        />

        <Route path="/Info" element={<Info />} />  
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
