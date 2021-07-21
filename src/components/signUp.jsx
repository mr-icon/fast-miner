import React, {UseState} from 'react';
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";

const signUp = () => {
    const [currentUser, setCurrentUser] = UseState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password } = e.terget.elements;
        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser (true);
        } catch (error) {
            alert(error);
        }
    };
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
            <h1>Sign Up</h1>
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

export default signUp;