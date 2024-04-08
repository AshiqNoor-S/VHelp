import React from "react";
import "../styles/home.css";
import Nav from "../header/Nav.jsx";
import Card from "./Card.jsx";

const Home = () => (
    <div>
        <Nav/>
        <div className="hero">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to V<span>Help</span></h1>
                </div>
                <div className="hero-img">
                    <img src={process.env.PUBLIC_URL + 'img-1.png'} />
                </div>
            </div>
        </div>
        
        <div className="cards">
            <div className="services-txt">
                <p>The services that we provide</p>
                <h1>Services</h1>
            </div>
            <div className="Services">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        
    </div>
);

export  default Home; 