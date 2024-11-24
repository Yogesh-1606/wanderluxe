import React from 'react';
import './Account.css';

const Account = ({ setIsLoggedIn }) => {
    const userInfo = {
        name: 'ABC',
        email: 'ABC@GMAIL.COM',
        password: '1234'
    };

    const handleLogout = () => {
        setIsLoggedIn(false);  // Set the user as logged out in the parent component
    };
    // i have added the sections here , username and others
    return (
        <div className="Account">
            <h2>Account Information</h2>

            <div className="Account-section">
                <h3>User Information</h3>

                <label>
                    Name:
                    <input type="text" value={userInfo.name} readOnly />
                </label>

                <label>
                    Email:
                    <input type="email" value={userInfo.email} readOnly />
                </label>

                <label>
                    Password:
                    <input type="password" value={userInfo.password} readOnly />
                </label>
            </div>

            {/* Booking History Section not working currently*/}
            <div className="Account-section-booking-history">
                <h3>Booking History</h3>
                <p>You have no recent bookings.</p>
            </div>

            {/* Help Section shows number and mail*/}
            <div className="Account-section help">
                <h3>Help & Support</h3>
                <p>If you need any assistance, please contact our support team.</p>
                <small className="text">"+919999999999" Or mail us at "WanderLuxe9999@gmail.com"</small>
            </div>

            <div>
                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Account;
