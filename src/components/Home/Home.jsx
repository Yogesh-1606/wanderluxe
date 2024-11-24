import React, { useState } from 'react';
import './Home.css';
import { GrLocation } from 'react-icons/gr';

const Home = ({setQuery}) => {

  const destinations = [
    "Jaipur",
    "Goa",
    "Agra",
    "Varanasi",
    "Kerala",
    "Delhi",
    "Ladakh",
    "Udaipur",
    "Mysore",
    "Kolkata",
    "Andaman"
  ];



  return (
    <section className='Home'>
      <div className="HomeContent container">
        <div className="textDiv">
          <h1 className="HomeTitle">Search Your Dreams</h1>
        </div>

        <div className="cardDiv grid">
          <div className="DestinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input
                type="text"
                placeholder='Enter the place here...'
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
              />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your check-in date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your check-out date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

         
        </div>

      </div>
    </section>
  );
}

export default Home;
