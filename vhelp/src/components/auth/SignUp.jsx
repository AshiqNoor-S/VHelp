import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Navigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoggedIn(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleGoogleSignUp = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                setLoggedIn(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (loggedIn) {
        return <Navigate to="/" />
    }

    return (
        <div className="login-container"> 
            <div className="form">
            <h2>Sign Up</h2>
            <form className="login-form" onSubmit={handleSignUp}>
                <input
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="login-button" type="submit">Sign Up</button>
                </form>
                <p className="or-btn">or</p>
                <button className="google-login-button"  onClick={handleGoogleSignUp}>Sign Up with Google</button>
            </div>
        </div>
    );
};

export default SignUp;
