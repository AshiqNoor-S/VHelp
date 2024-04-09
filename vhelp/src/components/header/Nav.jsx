import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import "../styles/nav.css";
import { auth } from "../../firebase-config";

const Nav = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>V<span>Help</span></div>
            <div className='navbar__item'>Services</div>
            <div className='navbar__item'>About Us</div>
            <div className='navbar__item'>Contact</div>
            <div className='navbar__item'>Help</div>
            {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <>
                    <Link to="/signup" className="navbar__item">Sign Up</Link>
                    <Link to="/login" className="navbar__item">Login</Link>
                </>
            )}
        </header>
    );
};

export default Nav;
