import React from 'react';
import { Link } from 'react-router-dom'; //here i Imported Link from react-router-dom
import './Main.css';

//imported some images from My pc 
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


const response = await fetch('http://localhost:8088/api/hotels');
        
// To Check if the response is OK 
if (!response.ok) {
  throw new Error('Network response was not ok');
}

console.log("one")

const Places = await response.json();
console.log(Places);
for(let places of Places) { 
     console.log(places.imageSrc);
     places.imageSrc = imagemap[places.imageSrc]  
}


const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Trending Destinations</h3>
      </div>

      <div className="secContent grid">
        {Places.map(({ id, imageSrc, destTitle, location, grade, charges, description }) => {
          return (
            <Link
              key={id}
              to="/Info" // then we will be  Navigated  to the Info page
              state={{ id, imageSrc, destTitle, location, grade, charges, description }} 
              className="singleDestination" 
            >
              <div className="imageDiv">
                <img src={imageSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <span className="name">{location}</span>
                </span>

                <div className="charges flex">
                  <div className="grade">
                    <span>{grade}</span>
                  </div>

                  <div className="price">
                    <h5>Charges: ₹{charges}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
