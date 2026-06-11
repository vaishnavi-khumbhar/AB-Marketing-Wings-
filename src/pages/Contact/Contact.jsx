import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

emailjs.init("ttpt2F7B9_vK1v1GV");

const contactData = [
  { icon: <FaPhoneAlt />, title: "Call Us Today", value: "+91 70585 27549" },
  { icon: <FaEnvelope />, title: "Email Us", value: "abmarketingwings@gmail.com" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    value: "Office No. 513, 5th Floor, Amanora Chambers, Amanora Town Centre, Opp. Season Mall Road, Hadapsar, Pune - 411028",
  },
  { icon: <FaClock />, title: "Working Hours", value: "Mon - Sat (10:00 AM - 7:00 PM)" },
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid Email Address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      await emailjs.send(
        "service_zgagkyp",
        "template_kfzj0zh",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );
    } catch (err) {
      console.error("EmailJS Error:", err);
    } finally {
      setSuccess("Message Sent Successfully! We will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
       
        <div className="contact-hero-content">
          <div className="contact-badge">GET IN TOUCH</div>
          <h1>Contact <span>Us</span></h1>
          <p>Contact Advertising & Branding Marketing.
          Ready to grow your business with professional digital marketing solutions?
</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="container">
          <div className="row align-items-center">

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-card">
                <span className="contact-mini-title">CONTACT US</span>
                <h2>Let's Grow Your Business</h2>
              
                <p>Fill out the form below and our team will contact you shortly.
</p>

                {success && (
                  <div className="alert alert-success">
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className={`form-control custom-input ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className={`form-control custom-input ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="phone"
                      className={`form-control custom-input ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                    />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                  </div>

                  <div className="mb-3">
                    <textarea
                      rows="5"
                      name="message"
                      className={`form-control custom-input ${errors.message ? "is-invalid" : ""}`}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-image text-center">
                <motion.img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Contact"
                  className="img-fluid"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="orange-contact-section py-5">

        <div className="container">
          
          <div className="row g-4">
            {contactData.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="orange-contact-card">
                  <div className="orange-contact-icon">{item.icon}</div>
                  <h5 className="orange-contact-title">{item.title}</h5>
                  <p className="orange-contact-text">{item.value}</p>
                  <span className="orange-contact-glow"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="social-connect-section">
        <div className="bubble-3"></div>
        <div className="bubble-4"></div>
        <div className="container text-center">
          <span className="social-subtitle">Connect With Us</span>
          <h2 className="social-main-title">Follow Us On Social Media</h2>
          <p className="social-description">
            Stay updated with our latest marketing insights, creative campaigns, and business growth strategies.
          </p>
          <div className="social-icon-wrapper">
            <a href="https://www.instagram.com/abmarketingwings/" target="_blank" rel="noopener noreferrer" className="social-btn instagram-btn">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583328312980" target="_blank" rel="noopener noreferrer" className="social-btn facebook-btn">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/a-b-marketing-wings/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin-btn">
              <FaLinkedinIn />
            </a>
              
              <a
    href="https://www.youtube.com/@abmarketingwings"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn youtube-btn"
  >
    <FaYoutube />
  </a>

    <a
    href="https://wa.me/917058527549"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn whatsapp-btn"
  >
    <FaWhatsapp />
  </a>
            
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2233163916158!2d73.9347131!3d18.518807900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x823acbf88bf32149%3A0xf253f989ffa79d77!2sA%20B%20Marketing%20Wings!5e0!3m2!1sen!2sin!4v1780552652790!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;