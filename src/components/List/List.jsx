import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './List.css';

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

const travelDestinations = [
  { id: 1, imageSrc: Jaipur, destTitle: 'Rambagh Palace', location: 'Jaipur, Rajasthan', grade: 'A', charges: 3000, description: 'A former royal residence, Rambagh Palace offers luxurious suites, sprawling gardens, and a blend of traditional and modern hospitality.' },
  { id: 2, imageSrc: Varanasi, destTitle: 'BrijRama Palace', location: 'Varanasi, Uttar Pradesh', grade: 'A+', charges: 1500, description: 'Located on the banks of the Ganges, BrijRama Palace provides a heritage experience with panoramic views and traditional cuisine.' },
  { id: 3, imageSrc: Goa, destTitle: 'Taj Exotica Resort & Spa', location: 'Benaulim, Goa', grade: 'A+', charges: 4000, description: 'Nestled on the southwest coast, this luxurious resort offers private villas, a pristine beach, and holistic spa experiences.' },
  { id: 4, imageSrc: Kerala, destTitle: 'The Leela Kovalam', location: 'Kovalam, Kerala', grade: 'A', charges: 3500, description: 'Overlooking the Arabian Sea, The Leela Kovalam provides premium accommodations with breathtaking views and Ayurvedic wellness programs.' },
  { id: 5, imageSrc: Delhi, destTitle: 'The Imperial', location: 'New Delhi', grade: 'A', charges: 2000, description: 'This heritage hotel blends colonial architecture with modern luxury, featuring award-winning restaurants and a historic art gallery.' },
  { id: 6, imageSrc: Ladakh, destTitle: 'The Grand Dragon', location: 'Jaipur, Rajasthan', grade: 'A+', charges: 5000, description: 'Set amidst the Himalayas, The Grand Dragon offers comfortable rooms with panoramic views and sustainable tourism practices.' },
  { id: 7, imageSrc: Agra, destTitle: 'The Oberoi Amarvilas', location: 'Agra, Uttar Pradesh', grade: 'A+', charges: 1800, description: 'Located near the Taj Mahal, The Oberoi Amarvilas offers luxurious suites with uninterrupted views of the iconic monument.' },
  { id: 8, imageSrc: Udaipur, destTitle: 'Taj Lake Palace', location: 'Udaipur, Rajasthan', grade: 'A', charges: 3000, description: 'A floating palace on Lake Pichola, this hotel is renowned for its opulence, offering an exquisite stay with heritage charm.' },
  { id: 9, imageSrc: Hampi, destTitle: 'Evolve Back Resort', location: 'Hampi, Karnataka', grade: 'A', charges: 2500, description: 'Inspired by the Vijayanagara Empire, this resort provides a blend of rustic luxury amidst the ancient ruins of Hampi.' },
  { id: 10, imageSrc: Mysore, destTitle: 'Royal Orchid Brindavan Garden', location: 'Mysore, Karnataka', grade: 'A', charges: 2200, description: 'Located beside the famous Brindavan Gardens, this hotel offers a regal experience with scenic views of the dancing fountains.' },
  { id: 11, imageSrc: Jaipur, destTitle: 'Taj Rambagh Palace', location: 'Jaipur, Rajasthan', grade: 'A+', charges: 5000, description: 'A luxury palace hotel with royal heritage, Taj Rambagh offers beautiful gardens, grand architecture, and a spa for a lavish stay.' },
  { id: 12, imageSrc: Jaipur, destTitle: 'Fairmont Jaipur', location: 'Jaipur, Rajasthan', grade: 'A', charges: 3500, description: 'Inspired by traditional Rajasthani architecture, Fairmont Jaipur offers modern luxury with regal touches and a tranquil setting.' },
  { id: 13, imageSrc: Agra, destTitle: 'ITC Mughal', location: 'Agra, Uttar Pradesh', grade: 'A', charges: 3000, description: 'Nestled near the Taj Mahal, ITC Mughal offers a blend of Mughal architecture with contemporary luxury and wellness facilities.' },
  { id: 14, imageSrc: Agra, destTitle: 'Trident Agra', location: 'Agra, Uttar Pradesh', grade: 'A', charges: 2500, description: 'Located near the Taj Mahal, Trident Agra is a peaceful oasis offering contemporary amenities, lush gardens, and stunning views.' },
  { id: 15, imageSrc: Mysore, destTitle: 'The Windflower Resort & Spa', location: 'Mysore, Karnataka', grade: 'A+', charges: 2800, description: 'Set against the foothills of the Chamundi Hills, The Windflower Resort offers serene luxury with a spa and outdoor experiences.' },
  { id: 16, imageSrc: Mysore, destTitle: 'Radisson Blu Plaza', location: 'Mysore, Karnataka', grade: 'A', charges: 2300, description: 'A luxurious hotel near the Mysore Palace offering modern rooms, a rooftop pool, and a variety of dining options.' },
  { id: 17, imageSrc: Agra, destTitle: 'The Taj Mahal Palace', location: 'Mumbai, Maharashtra', grade: 'A+', charges: 7000, description: 'An iconic Mumbai landmark, The Taj Mahal Palace offers breathtaking views of the Arabian Sea and world-class services and dining.' },
  { id: 18, imageSrc: Agra, destTitle: 'The Oberoi Mumbai', location: 'Mumbai, Maharashtra', grade: 'A', charges: 5000, description: 'With panoramic views of the Arabian Sea, The Oberoi Mumbai offers a luxurious stay with fine dining and impeccable service.' },
  { id: 19, imageSrc: Agra, destTitle: 'Leela Mumbai', location: 'Mumbai, Maharashtra', grade: 'A', charges: 4500, description: 'Located near the airport, The Leela Mumbai offers an oasis of tranquility with luxurious rooms, dining, and spa services.' },
  { id: 20, imageSrc:Agra, destTitle: 'ITC Maratha', location: 'Mumbai, Maharashtra', grade: 'A', charges: 4000, description: 'ITC Maratha is a grand, heritage-inspired hotel that offers luxurious accommodations, fine dining, and impeccable service.' },
];

const List = ({ query }) => {
  // Filtering destinations based on the search query
  const filteredDestinations = travelDestinations.filter((item) => 
    item.location.toLowerCase().includes(query.toLowerCase()) || 
    item.destTitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="list-container">
      {query && filteredDestinations.length > 0 ? (
        <>
          <h1 className="page-title">Travel Destinations</h1>
          <ul className="list-items">
            <div className="card-list">
              {filteredDestinations.map(item => (
                <li key={item.id} className="destination-card">
                  <Link 
                    to="/info" 
                    state={item} // Passing the destination data via state
                    className="destination-link" // Optional: for styling
                  >
                    <div className="image-container">
                      <img src={item.imageSrc} alt={item.destTitle} className="destination-image" />
                    </div>
                    <h2 className="destination-title">{item.destTitle}</h2>
                    <p className="destination-location"><strong>Location:</strong> {item.location}</p>
                    <p className="destination-grade"><strong>Grade:</strong> {item.grade}</p>
                    <p className="destination-charges"><strong>Charges:</strong> ₹{item.charges}</p>
                    <div className="description-container">
                      <p className="destination-description"><strong>Description:</strong> {item.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </>
      ) : (
        query ? (
          <p>No destinations found for your search.</p>
        ) : null
      )}
    </div>
  );
};

export default List;
