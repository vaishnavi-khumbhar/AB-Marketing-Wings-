import "./About.css";
import { useNavigate } from "react-router-dom";

import {
  FaBullhorn,
  FaHashtag,
  FaPalette,
  FaVideo,
  FaLaptopCode,
  FaFacebookF,
  FaAd,
  FaUsers
} from "react-icons/fa";

function About() {
  const navigate = useNavigate();


  const expertiseData = [
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />
  },
  {
    title: "Social Media Marketing",
    icon: <FaHashtag />
  },
  {
    title: "Branding & Design",
    icon: <FaPalette />
  },
  {
    title: "Video Editing",
    icon: <FaVideo />
  },
  {
    title: "Website Development",
    icon: <FaLaptopCode />
  },
  {
    title: "Facebook Ads",
    icon: <FaFacebookF />
  },
  {
    title: "PPC Advertising",
    icon: <FaAd />
  },
  {
    title: "Lead Generation",
    icon: <FaUsers />
  }
];
  return (
    <div className="ab-page">

      {/* Hero Section */}
      <section className="ab-about-hero">

        <div className="ab-floating-circle ab-circle1"></div>
        <div className="ab-floating-circle ab-circle2"></div>

        <div className="container">

          <div className="ab-hero-content">

            <span className="ab-hero-badge">
              Leading Digital Marketing Agency In Pune
            </span>

            <h1>
              Turn Attention Into Customers
              <span> And Brands Into Market Leaders</span>
            </h1>

            <p>
              Welcome to AB Marketing Wings.
              We transform ambitious brands into digital success stories.
            </p>

            <div className="ab-hero-btns">

              <button
                className="ab-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Book Free Consultation
              </button>

              <button
                className="ab-outline-btn"
                onClick={() => navigate("/OurWork")}
              >
                View Our Work
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* About Company */}
      <section className="ab-about-company">
 <div className="blue-circle-1"></div>
  <div className="blue-circle-2"></div>

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Marketing Team"
                className="ab-about-img"
              />

            </div>

            <div className="col-lg-6">

              <span className="ab-section-tag">
                ABOUT US
              </span>

              <h2>
                Crafting Digital Success Stories Since Day One
              </h2>

              <p>
                Every brand has a story, but only a few truly make an impact.
                At AB Marketing Wings, we transform your brand story into
                a powerful digital presence that influences decisions,
                builds trust, and drives measurable business growth.
              </p>

              <p>
                As a leading digital marketing agency in Pune,
                we combine creativity, performance marketing,
                and data-driven strategies to help businesses
                scale faster, smarter and stronger.
              </p>

              <div className="ab-growth-points">
                <div>✔ Build Strong Visibility</div>
                <div>✔ Generate High-Quality Leads</div>
                <div>✔ Drive Measurable Growth</div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Solutions */}
      <section className="ab-solutions-section">

        <div className="container">

          <div className="ab-section-heading">
            <h2>Our Core Solutions</h2>
            <p>Powerful solutions built for ambitious brands.</p>
          </div>

          <div className="ab-solutions-grid">

            <div className="ab-solution-card">
              <h3>🚀 Brand Launch Studio</h3>
              <p>Crafting powerful identities that help new businesses stand out.</p>
            </div>

            <div className="ab-solution-card">
              <h3>🎯 Brand Transformation Lab</h3>
              <p>Modernizing brands with bold creativity and strategic positioning.</p>
            </div>

            <div className="ab-solution-card">
              <h3>🎨 Visual Identity Excellence</h3>
              <p>Designing memorable visual experiences that leave lasting impressions.</p>
            </div>

          </div>

        </div>

      </section>

      {/* Expertise */}
     {/* Expertise */}
<section className="ab-expertise-section">

  <div className="container">

    <div className="ab-section-heading">
      <h2>Our Expertise</h2>
      <p>
        Innovative digital solutions designed to help brands grow faster.
      </p>
    </div>

    <div className="row g-4">

      {expertiseData.map((item, index) => (

        <div className="col-md-6 col-lg-3" key={index}>

          <div className="ab-expertise-card">

            <div className="ab-expertise-icon">
              {item.icon}
            </div>

            <h4>{item.title}</h4>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Case Study */}
      <section className="ab-case-study">

        <div className="container">

          <div className="ab-case-card">

            <span>CASE STUDY</span>

            <h2>Varad Skincare Clinic</h2>

            <p>
              We transformed their digital presence using
              content marketing, storytelling and Meta Ads.
            </p>

            <div className="ab-case-stats">

              <div>
                <h3>100%</h3>
                <p>Engagement Growth</p>
              </div>

              <div>
                <h3>3X</h3>
                <p>More Inquiries</p>
              </div>

              <div>
                <h3>Top</h3>
                <p>Local Brand Positioning</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="ab-cta-section">

        <div className="container">

          <h2>Let's Elevate Your Brand</h2>

          <p>
            Grow your online presence, generate quality leads,
            and build a powerful brand identity.
          </p>

          <button
            className="ab-cta-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us Today
          </button>

        </div>

      </section>

    </div>
  );
}

export default About;