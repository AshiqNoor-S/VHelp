import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Navigate } from 'react-router-dom';
import "../styles/Login.css"; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setLoggedIn(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleGoogleLogin = () => {
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
        return <Navigate to="/" />;
    }

    return (
        <div className="login-container">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
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
                    <button className="login-button" type="submit">Login</button>
                </form>
                <p className="or-btn">or</p>
                <button className="google-login-button" onClick={handleGoogleLogin}>Login with Google</button>
            </div>
            
        </div>
    );
};

export default Login;
