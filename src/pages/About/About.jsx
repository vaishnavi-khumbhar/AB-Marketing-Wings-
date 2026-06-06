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

      {/* Heading */}
      <div className="col-12 order-1 d-lg-none text-center">
        <span className="ab-section-tag">
          ABOUT US
        </span>

        <h2>
          Empowering Brands Through Advertising, Branding & Marketing
        </h2>
      </div>

      {/* Image */}
      <div className="col-lg-6 order-2 order-lg-1">
        <img
          src={`${import.meta.env.BASE_URL}CEO.jpeg`}
          alt="CEO Services by AB Marketing Wings"
          className="ab-about-img"
        />
      </div>

      {/* Content */}
      <div className="col-lg-6 order-3 order-lg-2">

        {/* Desktop Heading */}
        <div className="d-none d-lg-block">
          <span className="ab-section-tag">
            ABOUT US
          </span>

          <h2>
            Empowering Brands Through Advertising, Branding & Marketing
          </h2>
        </div>

        <p>
          At AB Marketing Wings, we believe every business deserves a strong
          and memorable brand identity. We specialize in creating impactful
          advertising campaigns, strategic branding solutions, and result-driven
          marketing strategies that help businesses connect with their target
          audience and stand out in a competitive market.
        </p>

        <p>
          Based in Pune, our team combines creativity, innovation, and
          data-driven insights to deliver powerful digital and offline
          marketing solutions.
        </p>

        <div className="ab-growth-points">
          <div>✔ Creative Advertising Campaigns</div>
          <div>✔ Professional Branding Solutions</div>
          <div>✔ Digital & Social Media Marketing</div>
          <div>✔ High-Quality Lead Generation</div>
          <div>✔ Increased Brand Awareness</div>
          <div>✔ Measurable Business Growth</div>
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