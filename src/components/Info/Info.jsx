import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import './Info.css'; 

import Jaipur from '../../assets/Jaipur.jpg';
import Goa from '../../assets/goa.jpg';
import Agra from '../../assets/agra.jpg';
import Varanasi from '../../assets/varanasi.jpg';
import Andaman from '../../assets/andaman.jpg';
import Udaipur from '../../assets/udaipur.jpg';
import Kerala from '../../assets/kerela.jpg';
import Kolkata from '../../assets/kolkata.jpg';
import Delhi from '../../assets/delhi.jpg';
import Ladakh from '../../assets/ladakh.jpg';
import Hampi from '../../assets/hampi.jpg';
import Mysore from '../../assets/mysore.jpg';

let imagemap={
  "Jaipur":Jaipur,
  "Varanasi":Varanasi,
  "Goa":Goa,
  "Kerala":Kerala,
  "Delhi":Delhi,
  "Ladakh":Ladakh,
  "Agra":Agra,
  "Udaipur":Udaipur,
  "Hampi":Hampi,
  "Mysore":Mysore,
  "Kolkata":Kolkata,
  "Andaman":Andaman
}

const Info = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate(); 
  const { id, imageSrc, destTitle, location, grade, charges, description } = state || {};

  
  if (!state) {
    navigate('/');
    return <div>Redirecting...</div>;
  }

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false); 

  const handleCheckInChange = (event) => setCheckInDate(event.target.value);
  const handleCheckOutChange = (event) => setCheckOutDate(event.target.value);
  const handleRoomsChange = (event) => setRooms(event.target.value);

  const handleBooking = (e) => {
    e.preventDefault();
    if (checkInDate && checkOutDate && checkInDate < checkOutDate) {
      setBookingSuccess(true); // Set success state to true
      setCheckInDate('');
      setCheckOutDate('');
      setRooms(1);
    } else {
      alert('Please select valid dates and rooms.'); // Simple validation to show if dates are not correct 
    }
  };

  return (
    <div className="info-container">
      <div className="image-container">
        {[imagemap].map((_, index) => (
          <img
            key={index}
            src={imageSrc}
            alt={`Hotel Image ${index + 1}`}
            className="hotel-image"
          />
        ))}
      </div>

      <div className="details-container">
        <h2 className="hotel-name">{destTitle}</h2>

        <div className="hotel-rating">
          <span>⭐⭐⭐⭐☆ {grade}</span> {/* Static example for rating */}
        </div>

        <div className="hotel-price">
          <span className="price">₹{charges} per night</span>
        </div>

        <div className="hotel-location">
          <p>{location}</p>
        </div>

        <div className="hotel-description">
          <p>{description}</p>
        </div>

        <form className="booking-form">
          <div className="input-group">
            <label htmlFor="check-in">Check-in:</label>
            <input
              type="date"
              id="check-in"
              value={checkInDate}
              onChange={handleCheckInChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="check-out">Check-out:</label>
            <input
              type="date"
              id="check-out"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="rooms">Rooms:</label>
            <select
              id="rooms"
              value={rooms}
              onChange={handleRoomsChange}
            >
              {[1, 2, 3, 4, 5].map((roomCount) => (
                <option key={roomCount} value={roomCount}>
                  {roomCount} Room{roomCount > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button className="btn" onClick={handleBooking}>Book Now</button>
          </div>
        </form>
      </div>

      {bookingSuccess && (
        <div className="successPopup">
          <h3>Booking Successful!</h3>
          <p>Your booking was completed successfully. Enjoy your stay!</p>
          <button onClick={() => setBookingSuccess(false)} className="btn">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Info;
