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

              <a href="https://www.instagram.com/abmarketingwings/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>

              <a href="https://www.facebook.com/profile.php?id=61583328312980" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>

              <a href="https://www.linkedin.com/company/a-b-marketing-wings/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>

              <a href="https://wa.me/917058527549" target="_blank" rel="noopener noreferrer">
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
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Social Media Marketing</Link></li>
              <li><Link to="/services">SEO Optimization</Link></li>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">Branding &amp; Design</Link></li>
            </ul>

          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h4>Contact Info</h4>

            <ul className="contact-list">

              <li>
                <FaPhoneAlt className="icon" />
                <a href="tel:+917058527549" className="contact-link">
  70585 27549
</a>
              </li>

              <li>
                <FaEnvelope className="icon" />
               <a href="mailto:abmarketingwings@gmail.com" className="contact-link">
  abmarketingwings@gmail.com
</a>
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