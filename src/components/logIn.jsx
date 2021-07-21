import React, { UseContext} from 'react';
import { Redirect } from 'react-router-dom';
import { authContext } from './Auth'
import firebaseConfig from '../config';

const logIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.Auth().signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
            alert(error);
        }
    };
    const { currentUser } = UseContext(authContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label for="password">Password</label>
                <input type="password" name="passsword" placeholder="Password" />
                <button type="submit">submit</button>
            </form>
        </>
    );
};

export default logIn