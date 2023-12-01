import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer pb-6">
      <div className="bottom-footer">
        <div className="copyright">
          <p className="text ">
            Copyright &copy; 2023 All rights reserved |
            <span> BryLashesArt</span>
          </p>
        </div>

        <div className="followme-wrap">
          <div className="followme">
            <h3>Follow me</h3>
            <span className="footer-line"></span>
            <div className="social-media">
              <Link href="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
