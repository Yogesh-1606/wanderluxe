const express = require('express');
const cors = require('cors');
const app = express();
const port = 8088;

// Enable CORS for all routes
app.use(cors());
// Array of hotel data
const hotels = [
    { 
        id: 1, 
        imageSrc: 'Jaipur', 
        destTitle: 'Rambagh Palace', 
        location: 'ABC, Rajasthan', 
        grade: 'A', 
        charges: 3000, 
        description: 'A former royal residence, Rambagh Palace offers luxurious suites, sprawling gardens, and a blend of traditional and modern hospitality.' 
    },
    { 
        id: 2, 
        imageSrc: 'Varanasi', 
        destTitle: 'BrijRama Palace', 
        location: 'Varanasi, Uttar Pradesh', 
        grade: 'A+', 
        charges: 1500, 
        description: 'Located on the banks of the Ganges, BrijRama Palace provides a heritage experience with panoramic views and traditional cuisine.' 
    },
    { 
        id: 3, 
        imageSrc: 'Goa', 
        destTitle: 'Taj Exotica Resort & Spa', 
        location: 'Benaulim, Goa', 
        grade: 'A+', 
        charges: 4000, 
        description: 'Nestled on the southwest coast, this luxurious resort offers private villas, a pristine beach, and holistic spa experiences.' 
    },
    { 
        id: 4, 
        imageSrc: 'Kerala', 
        destTitle: 'The Leela Kovalam', 
        location: 'Kovalam, Kerala', 
        grade: 'A', 
        charges: 3500, 
        description: 'Overlooking the Arabian Sea, The Leela Kovalam provides premium accommodations with breathtaking views and Ayurvedic wellness programs.' 
    },
    { 
        id: 5, 
        imageSrc: 'Delhi', 
        destTitle: 'The Imperial', 
        location: 'New Delhi', 
        grade: 'A', 
        charges: 2000, 
        description: 'This heritage hotel blends colonial architecture with modern luxury, featuring award-winning restaurants and a historic art gallery.' 
    },
    { 
        id: 6, 
        imageSrc: 'Ladakh', 
        destTitle: 'The Grand Dragon', 
        location: 'Leh, Ladakh', 
        grade: 'A+', 
        charges: 5000, 
        description: 'Set amidst the Himalayas, The Grand Dragon offers comfortable rooms with panoramic views and sustainable tourism practices.' 
    },
    { 
        id: 7, 
        imageSrc: 'Agra', 
        destTitle: 'The Oberoi Amarvilas', 
        location: 'Agra, Uttar Pradesh', 
        grade: 'A+', 
        charges: 1800, 
        description: 'Located near the Taj Mahal, The Oberoi Amarvilas offers luxurious suites with uninterrupted views of the iconic monument.' 
    },
    { 
        id: 8, 
        imageSrc: 'Udaipur', 
        destTitle: 'Taj Lake Palace', 
        location: 'Udaipur, Rajasthan', 
        grade: 'A', 
        charges: 3000, 
        description: 'A floating palace on Lake Pichola, this hotel is renowned for its opulence, offering an exquisite stay with heritage charm.' 
    },
    { 
        id: 9, 
        imageSrc: 'Hampi', 
        destTitle: 'Evolve Back Resort', 
        location: 'Hampi, Karnataka', 
        grade: 'A', 
        charges: 2500, 
        description: 'Inspired by the Vijayanagara Empire, this resort provides a blend of rustic luxury amidst the ancient ruins of Hampi.' 
    },
    { 
        id: 10, 
        imageSrc: 'Mysore', 
        destTitle: 'Royal Orchid Brindavan Garden', 
        location: 'Mysore, Karnataka', 
        grade: 'A', 
        charges: 2200, 
        description: 'Located beside the famous Brindavan Gardens, this hotel offers a regal experience with scenic views of the dancing fountains.' 
    },
    { 
        id: 11, 
        imageSrc: 'Kolkata', 
        destTitle: 'The Oberoi Grand', 
        location: 'Kolkata, West Bengal', 
        grade: 'A', 
        charges: 2100, 
        description: 'Known as the Grand Dame of Kolkata, this heritage hotel offers elegant interiors, fine dining, and personalized service.' 
    }
];

// Define the GET route for hotels data
app.get('/api/hotels', (req, res) => {
    // Respond with the hotels array
    res.json(hotels);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
