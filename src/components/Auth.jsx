import React, { Children, useEffect, useState} from 'react';
import firebaseConfig from '../config';

export const authContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        firebaseConfig.Auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return <p>Loading....</p>
    }
    return (
        <authContext.Provider value={{ currentUser }}>
            {children}
        </authContext.Provider>
    );
};