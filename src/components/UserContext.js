import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false); // Login state
    const [userInfo, setUserInfo] = useState({ name: '', email: '' }); // User info state

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn, userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};
