import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeMenu = () => {
    const menu = document.getElementById("menu");
    if (window.innerWidth < 992 && menu) {
      menu.classList.remove("show");
    }
    setShowServices(false);
  };

  const openSidebar  = () => { setSidebarOpen(true);  document.body.style.overflow = "hidden"; };
  const closeSidebar = () => { setSidebarOpen(false); document.body.style.overflow = ""; };

  return (
    <>
      {/* SIDEBAR OVERLAY */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />

      {/* SIDEBAR DRAWER */}
      <div className={`sidebar-drawer ${sidebarOpen ? "open" : ""}`}>

        {/* Close Button */}
        <button className="sidebar-close" onClick={closeSidebar}>
          <FaTimes />
        </button>

        {/* Logo + Company Name */}
        <div className="sidebar-brand">
          <img
            src={`${import.meta.env.BASE_URL}ab_logo.png`}
            alt="AB Marketing Wings"
            className="sidebar-logo"
          />
          <h2 className="sidebar-company-name">AB Marketing Wings</h2>
        </div>

        <hr className="sidebar-divider" />

        {/* Contact Details */}
        <div className="sidebar-details">
          <a href="tel:+917058527549" className="sidebar-detail-item">
            <FaPhoneAlt className="sidebar-icon" />
            <span>70585 27549</span>
          </a>
          <a href="mailto:abmarketingwings@gmail.com" className="sidebar-detail-item">
            <FaEnvelope className="sidebar-icon" />
            <span>abmarketingwings@gmail.com</span>
          </a>
          <div className="sidebar-detail-item">
            <FaClock className="sidebar-icon" />
            <span>Mon - Sat (10 AM - 7 PM)</span>
          </div>
        </div>

        <hr className="sidebar-divider" />

        {/* Social Icons */}
        <p className="sidebar-social-title">Follow Us</p>
        <div className="sidebar-social">
          <a href="https://www.instagram.com/abmarketingwings/" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61583328312980" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/a-b-marketing-wings/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><FaLinkedinIn /></a>
          <a href="https://wa.me/917058527549" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><FaWhatsapp /></a>
          <a href="https://www.youtube.com/@abmarketingwings" target="_blank" rel="noopener noreferrer" className="social-icon youtube"><FaYoutube /></a>
        </div>

      </div>

    

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">

          

          {/* LOGO */}
          <Link to="/" className="navbar-brand logo" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}ab_logo.png`}
              alt="AB Marketing Wings"
              className="navbar-logo"
            />
            <span className="logo-text">AB Marketing Wings</span>
          </Link>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse justify-content-end" id="menu">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
              </li>

              {/* SERVICES */}
              <li className="nav-item mega-menu-parent">
                <Link
                  className="nav-link"
                  to="/services"
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setShowServices(!showServices);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  Services
                </Link>

                <div className={`mega-menu ${showServices ? "show" : ""}`}>
                  <div className="mega-column">
                    <Link to="/services" onClick={closeMenu}>Digital Marketing</Link>
                    <Link to="/services" onClick={closeMenu}>Website Development</Link>
                  </div>
                  <div className="mega-column">
                    <Link to="/services" onClick={closeMenu}>Social Media Marketing</Link>
                    <Link to="/services" onClick={closeMenu}>Branding & Creative Design</Link>
                  </div>
                  <div className="mega-column">
                    <Link to="/services" onClick={closeMenu}>Video Editing</Link>
                    <Link to="/services" onClick={closeMenu}>Google Ads / PPC</Link>
                    <Link to="/services" onClick={closeMenu}>Meta Advertising</Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link btn-contact" to="/contact" onClick={closeMenu}>Contact Us</Link>
              </li>


              {/* SIDEBAR TOGGLE BUTTON - Logo च्या आधी */}
          <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
          </button>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;