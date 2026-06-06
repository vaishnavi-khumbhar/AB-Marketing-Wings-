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

  const closeMenu = () => {
    const menu = document.getElementById("menu");

    if (window.innerWidth < 992 && menu) {
      menu.classList.remove("show");
    }
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-content">

          <div className="top-left">

            <span>
              <FaPhoneAlt /><a href="tel:+917058527549" className="contact-link">
  70585 27549
</a>
            </span>

            <span>
              <FaEnvelope /> <a href="mailto:abmarketingwings@gmail.com" className="contact-link">
  abmarketingwings@gmail.com
</a>
            </span>

            <span>
              <FaClock /> Mon - Sat (10 AM - 7 PM)
            </span>

          </div>

          <div className="top-right">

            <a
              href="https://www.instagram.com/abmarketingwings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61583328312980"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/a-b-marketing-wings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/917058527549"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">

          {/* LOGO */}
          <Link
            to="/"
            className="navbar-brand logo"
            onClick={closeMenu}
          >
            <img
              src={`${import.meta.env.BASE_URL}ab_logo.png`}
              alt="AB Marketing Wings"
              className="navbar-logo"
            />

            <span className="logo-text">
              AB Marketing Wings
            </span>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="menu"
          >
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/services"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/ourwork"
                  onClick={closeMenu}
                >
                  Our Work
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link btn-contact"
                  to="/contact"
                  onClick={closeMenu}
                >
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