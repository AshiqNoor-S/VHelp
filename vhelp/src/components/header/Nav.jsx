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
            <div className='navbar__title navbar__item'><Link to="/" style={{ textDecoration: 'none',color:'white' }}>V<span>Help</span></Link></div>
            <div className='navbar__item'>Services</div>
            <div className='navbar__item'>About Us</div>
            <div className='navbar__item'>Contact</div>
            <div className='navbar__item'>Help</div>
            {user ? (
                <div className="navbar__item"><button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button></div>
            ) : (
                <>
                    <div className="navbar__item"><Link  to="/signup" className="btn-primary">Sign Up</Link></div>
                    <div className="navbar__item"><Link  to="/login" className="btn-primary">Login</Link></div>
                </>
            )}
        </header>
    );
};

export default Nav;
