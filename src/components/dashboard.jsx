import React, { UseContext } from 'react';
import { Redirect } from 'react-router-dom';
import { authContext } from './Auth';
import firebaseConfig from '../config';

const Dashboard = () => {
    const { currentUser } = UseContext(authContext);
    if (!currentUser) {
        return <Redirect to='/logIn' />;
    }
    return (
        <div>
            <h1>Welcome TO Fastminer</h1>
            <p>this is the dashboard, if you can seethr you're logged in. </p>
            <button onClick={() => firebaseConfig.Auth().signOut()}>Sign Out</button>
        </div>
    );
};

export default Dashboard