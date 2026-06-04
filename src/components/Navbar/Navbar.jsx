import "./Navbar.css";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-content">

          <div className="top-left">
            <span>
              <FaPhoneAlt /> +91 70585 27549
            </span>

            <span>
              <FaEnvelope /> abmarketingwings@gmail.com
            </span>

            <span>
              <FaClock /> Mon - Sat (10 AM - 7 PM)
            </span>
          </div>

          <div className="top-right">

            <a href="https://www.instagram.com/abmarketingwings/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61583328312980" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://www.linkedin.com/company/a-b-marketing-wings/" target="_blank">
              <FaLinkedinIn />
            </a>

            <a href="https://wa.me/917058527549" target="_blank">
              <FaWhatsapp />
            </a>

          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">

          {/* LOGO */}
          <Link to="/" className="navbar-brand logo">
            <img src="/ab_logo.png" alt="AB Marketing Wings" className="navbar-logo" />
            <span className="logo-text">AB Marketing Wings</span>
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse justify-content-end" id="menu">

            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ourwork">Our Work</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link btn-contact" to="/contact">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;