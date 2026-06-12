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
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const services = [
    { name: "Digital Marketing", desc: "SEO, content & full-funnel growth", icon: "ti-speakerphone", bg: "#fff5f0", color: "#f47b4b" },
    { name: "Social Media Marketing", desc: "Grow your brand on every platform", icon: "ti-brand-instagram", bg: "#f0f7ff", color: "#378add" },
    { name: "Video Editing", desc: "Reels, ads & cinematic content", icon: "ti-video", bg: "#f0fff8", color: "#1D9E75" },
    { name: "Website Development", desc: "Fast, modern & conversion-ready", icon: "ti-layout", bg: "#fdf0ff", color: "#7F77DD" },
    { name: "Branding & Creative Design", desc: "Logos, identity & visual strategy", icon: "ti-brush", bg: "#fff8f0", color: "#EF9F27" },
    { name: "Google Ads / PPC", desc: "High-ROI search & display ads", icon: "ti-ad", bg: "#f0f7ff", color: "#378add" },
    { name: "Meta Advertising", desc: "Facebook & Instagram ads that convert", icon: "ti-brand-meta", bg: "#fff0f3", color: "#D4537E", full: true },
  ];

  const closeMenu = () => {
    const menu = document.getElementById("menu");
    if (window.innerWidth < 992 && menu) {
      menu.classList.remove("show");
    }
    setShowServices(false);
    setMobileServicesOpen(false);
  };

  const openSidebar  = () => { setSidebarOpen(true);  document.body.style.overflow = "hidden"; };
  const closeSidebar = () => { setSidebarOpen(false); document.body.style.overflow = ""; };

  const isMobile = () => window.innerWidth < 992;

  return (
    <>
      {/* SIDEBAR OVERLAY */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />

      {/* SIDEBAR DRAWER */}
      <div className={`sidebar-drawer ${sidebarOpen ? "open" : ""}`}>
        <button className="sidebar-close" onClick={closeSidebar}><FaTimes /></button>
        <div className="sidebar-brand">
          <img src={`${import.meta.env.BASE_URL}ab_logo.png`} alt="AB Marketing Wings" className="sidebar-logo" />
          <h2 className="sidebar-company-name">AB Marketing Wings</h2>
        </div>
        <hr className="sidebar-divider" />
       <div className="sidebar-details">
  <a href="tel:+917058527549" className="sidebar-detail-item">
    <FaPhoneAlt className="sidebar-icon" />
    <span>70585 27549</span>
  </a>

  <a
    href="mailto:abmarketingwings@gmail.com"
    className="sidebar-detail-item"
  >
    <FaEnvelope className="sidebar-icon" />
    <span>abmarketingwings@gmail.com</span>
  </a>

  <div className="sidebar-detail-item">
    <FaClock className="sidebar-icon" />
    <span>Mon - Sat (10 AM - 7 PM)</span>
  </div>

  <div className="sidebar-detail-item">
    <FaMapMarkerAlt className="sidebar-icon" />
    <span>
      Office No. 513, 5th Floor, Amanora Chambers,
      Amanora Town Centre, Opp. Season Mall Road,
      Hadapsar, Pune - 411028
    </span>
  </div>
</div>
        <hr className="sidebar-divider" />
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
            <img src={`${import.meta.env.BASE_URL}ab_logo.png`} alt="AB Marketing Wings" className="navbar-logo" />
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
            <ul className="navbar-nav align-items-lg-center">

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
              </li>

              {/* ✅ SERVICES DROPDOWN */}
              <li
                className="nav-item"
                style={{ position: "relative" }}
                onMouseEnter={() => !isMobile() && setShowServices(true)}
                onMouseLeave={() => !isMobile() && setShowServices(false)}
              >
                {/* Services Button */}
                <div
                  className="nav-link"
                  style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
                  onClick={() => {
                    if (isMobile()) {
                      setMobileServicesOpen(!mobileServicesOpen);
                    }
                  }}
                >
                  <Link
                    to="/services"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={(e) => isMobile() && e.preventDefault()}
                  >
                    Services
                  </Link>
                  <FaChevronDown style={{
                    fontSize: "11px",
                    transition: "transform 0.3s",
                    transform: (isMobile() ? mobileServicesOpen : showServices) ? "rotate(180deg)" : "rotate(0deg)",
                  }} />
                </div>

                {/* ✅ DESKTOP DROPDOWN */}
                {showServices && !isMobile() && (
                  <div style={{
                    position: "absolute",
                    top: "110%",
                    right: 0,
                    width: "680px",
                    background: "#fff",
                    borderRadius: "16px",
                    border: "1px solid #eee",
                    padding: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.10)",
                    zIndex: 9999,
                  }}>
                    {services.map((s, i) => (
                      <Link
                        key={i}
                        to="/services"
                        onClick={closeMenu}
                        style={{
                          gridColumn: s.full ? "span 3" : "span 1",
                          display: "flex", alignItems: "flex-start", gap: "12px",
                          padding: "14px", borderRadius: "12px",
                          border: "1px solid #f0f0f0",
                          textDecoration: "none", background: "#fff",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#fff5f0"; e.currentTarget.style.borderColor = "#f47b4b"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#f0f0f0"; }}
                      >
                        <div style={{
                          width: "38px", height: "38px", borderRadius: "10px",
                          background: s.bg, display: "flex", alignItems: "center",
                          justifyContent: "center", flexShrink: 0,
                        }}>
                          <i className={`ti ${s.icon}`} style={{ color: s.color, fontSize: "18px" }} />
                        </div>
                        <div>
                          <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: "#24345d" }}>{s.name}</p>
                          <p style={{ margin: "3px 0 0", fontSize: "11px", color: "#888", lineHeight: 1.4 }}>{s.desc}</p>
                        </div>
                      </Link>
                    ))}

                   
                   
                  </div>
                )}

                {/*  MOBILE DROPDOWN */}
                {mobileServicesOpen && isMobile() && (
                  <div style={{
                    background: "#f9f9f9",
                    borderRadius: "12px",
                    padding: "10px",
                    marginTop: "6px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}>
                    {services.map((s, i) => (
                      <Link
                        key={i}
                        to="/services"
                        onClick={closeMenu}
                        style={{
                          display: "flex", alignItems: "center", gap: "12px",
                          padding: "12px", borderRadius: "10px",
                          border: "1px solid #eee", background: "#fff",
                          textDecoration: "none",
                        }}
                      >
                        <div style={{
                          width: "34px", height: "34px", borderRadius: "8px",
                          background: s.bg, display: "flex", alignItems: "center",
                          justifyContent: "center", flexShrink: 0,
                        }}>
                          <i className={`ti ${s.icon}`} style={{ color: s.color, fontSize: "16px" }} />
                        </div>
                        <div>
                          <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: "#24345d" }}>{s.name}</p>
                          <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#888" }}>{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link btn-contact" to="/contact" onClick={closeMenu}>Contact Us</Link>
              </li>

              <li className="nav-item">
                <button className="sidebar-toggle" onClick={openSidebar}><FaBars /></button>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;