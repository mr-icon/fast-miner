import React, { UseContext} from 'react';
import { link } from 'react-router-dom';
import { authContext } from './Auth';

const Home = () => {
    const { currentUser } = UseContext(authContext);
    return (
        <>
            <h1>Home</h1>
            {currentUser ? (
                <p>
                    you are logged - <link to="/dashboard">View Dashbroad </link>
                </p>
            ) : (
                <p>
                    <link to="/login">Log IN</link> or <link to="/signup">Sign Up</link>
                </p>
            )};
        </>
    );
};

export default Home;