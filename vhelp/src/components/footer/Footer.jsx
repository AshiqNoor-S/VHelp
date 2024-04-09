import React from 'react';
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
        <footer className="footer-distributed">
        <div className="footer-left">
            <h3>V<span>Help</span></h3>
            <p className="footer-links">
            <a href="#" className="link-1">Home</a>
            <a href="#">Services</a>
            <a href="#">Instructions</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
            </p>
            <p className="footer-company-name">VHelp © 2024</p>
        </div>

        <div className="footer-center">
            <div>
            <i className="fa fa-map-marker"></i>
            <p>Vellore Institute of technology <br/> Chennai, India</p>
            </div>
            <div>
            <i className="fa fa-phone"></i>
            <p>+23525324234</p>
            </div>
            <div>
            <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">vhelp@vit.ac.in</a></p>
            </div>
        </div>

        <div className="footer-right">
            <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
            <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-github"></i></a>
            </div>
        </div>
        </footer>
    </div>
  );
};

export default Footer;
