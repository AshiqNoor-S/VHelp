import React from "react";
import "../styles/home.css";
import Servicetile from "./Servicetile.jsx";
import Servicetileleft from "./Servicetileleft.jsx";

const Home = () => (
    <div>
        <div className="hero">
            <div className="hero-text-1">
            <h1><span style={{ fontWeight: 'bold', fontSize: '2.2em', color:'white' }}>V<span style={{ fontSize: '0.6em' ,color:'#190482' }}>Help</span></span>

                     - For VITians By VITians<br/>
                Elevating Campus Life, One Click at a Time.</h1>
                <br/>

                <div className="languages">
                    <p>വിഹെൽപ്പ്</p><p>सहायता</p><p>உதவி</p><p>సహాయం</p><p>सहाय्य</p><p>ସହାୟ୍ୟ</p>
                </div>
            </div>
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to <span className="sp1">V</span><span className="sp2">Help</span></h1>
                    <div className="services-mini">
                        <p>Laundry Logistics</p><p>Mess Navigator</p><p>Food Park ordering System</p>
                    </div>
                </div>
                <div className="hero-img">
                    <lottie-player src="https://lottie.host/d01d169b-bcd2-4db8-94aa-68f26e370929/4KA8PRlA5p.json" background="##FFFFFF" speed="1" style={{ width: 500, height: 500 }}  loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div>
        
        <div className="cards">
            <div className="services-txt">
                <p>The services that we provide</p>
                <h1>Services</h1>
            </div>
            <div className="Services">
                <Servicetile
                    serviceName="Laundry Logistics"
                    serviceDescription="Transcend the mundane with our Laundry Logistics, a service designed to impeccably manage your garment care. With an intuitive interface, you can effortlessly catalog the array of textiles entrusted to our care, from the staple trousers and shirts to the essential accoutrements of academic life. Real-time notifications provide a seamless update on your laundry's progression, ensuring your wardrobe is managed with the utmost efficiency and ready when you are.
                    "
                    animsrc="https://lottie.host/90b0d1d0-61f6-460a-8d31-d5d805abbb3f/ZBp9qYJzEY.json"
                />
                <Servicetileleft
                    serviceName="Mess Navigator
                    "
                    serviceDescription="Our Mess Navigator service epitomizes culinary convenience, employing sophisticated analytics to demystify the dining hall’s ebb and flow. This predictive tool empowers you to dine at your leisure, circumventing the crescendo of daily rushes with data-driven precision. Enjoy the solace of serene dining halls and the companionship of fellow scholars at your convenience, transforming each meal into an oasis of tranquility.
                    "
                    animsrc="https://lottie.host/3ea4c31b-00a6-48e2-89a0-0cb103c52cfb/g3VDmdnAAI.json"
                />
                <Servicetile
                    serviceName="Foodpark Ordering System"
                    serviceDescription="The Gourmet Gateway offers a curated portal to the hostel's culinary delights, marrying convenience with gastronomic pleasure. Delve into the day's menu with anticipatory delight, selecting from an array of dishes that cater to both whimsical cravings and nutritional needs. Upon selection, a bespoke token is generated, streamlining the collection process for a harmonious blend of efficiency and satisfaction. It’s not merely food ordering; it’s your passport to a world of culinary exploration, right at your fingertips.
                    "
                    animsrc="https://lottie.host/e5ec5ede-b04b-4d32-ae6f-8e39ca1a0401/D8Nchtcm10.json"
                />
            </div>
        </div>
        
    </div>
);

export  default Home; 