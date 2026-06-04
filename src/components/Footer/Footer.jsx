import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

<div className="container-fluid px-4">
          <div className="row">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">

            <h3 className="footer-logo">
              AB Marketing Wings
            </h3>

            <p>
              We help businesses grow with powerful digital marketing,
              branding, and performance-driven strategies that deliver real results.
            </p>

            <div className="footer-social">

              <a href="https://www.instagram.com/abmarketingwings/" target="_blank">
                <FaInstagram />
              </a>

              <a href="https://www.facebook.com/profile.php?id=61583328312980" target="_blank">
                <FaFacebookF />
              </a>

              <a href="https://www.linkedin.com/company/a-b-marketing-wings/" target="_blank">
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/917058527549"
                target="_blank"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h4>Quick Links</h4>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ourwork">Our Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h4>Services</h4>

            <ul>
              <li>Digital Marketing</li>
              <li>Social Media Marketing</li>
              <li>SEO Optimization</li>
              <li>Website Development</li>
              <li>Branding & Design</li>
            </ul>

          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h4>Contact Info</h4>

            <ul className="contact-list">

              <li>
                <FaPhoneAlt className="icon" />
                +91 70585 27549
              </li>

              <li>
                <FaEnvelope className="icon" />
                abmarketingwings@gmail.com
              </li>

              <li>
                <FaMapMarkerAlt className="icon" />
                Office No. 513, 5th Floor, Amanora Chambers,
                Amanora Town Centre, Opp. Season Mall Road,
                Hadapsar, Pune - 411028
              </li>

              <li>
                <FaClock className="icon" />
                Mon - Sat (10:00 AM - 7:00 PM)
              </li>

            </ul>

          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AB Marketing Wings. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;