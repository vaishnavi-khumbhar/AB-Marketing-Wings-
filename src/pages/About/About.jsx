import "./About.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {
  FaBullhorn,
  FaHashtag,
  FaPalette,
  FaVideo,
  FaLaptopCode,
  FaFacebookF,
  FaAd,
    FaChartLine,

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



useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.hc, .sol-card, .step').forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);

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
         Creative Marketing Solutions   

        </h2>
      </div>

      {/* Image */}
      <div className="col-lg-6 order-2 order-lg-1">
        <img
          src={`${import.meta.env.BASE_URL}About.jpg`}
          alt="CEO Services by AB Marketing Wings"
          className="ab-about-img"
        />

         {/* ADD HERE */}
  <div className="owner-info">
    <h4>Owner: Arti Hulle</h4>
    <span>Founded in 2024</span>
  </div>
      </div>

      {/* Content */}
      <div className="col-lg-6 order-3 order-lg-2">

        {/* Desktop Heading */}
        <div className="d-none d-lg-block">
          <span className="ab-section-tag">
            ABOUT US
          </span>

          <h2>
Creative Marketing Solutions   
       </h2>
        </div>

      <p>
  At AB Marketing Wings, we help businesses build strong and memorable brands.
  Through creative advertising, branding, and marketing strategies, we connect
  businesses with the right audience and drive growth.
</p>

<p>
  Based in Pune, our team combines creativity, innovation, and data-driven
  insights to deliver impactful digital and offline marketing solutions.
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
  <div className="sol-ring sr1"></div>
  <div className="sol-ring sr2"></div>
  <div className="sol-blob sb1"></div>
  <div className="sol-blob sb2"></div>

  <div className="container">
    <div className="sol-hd">
      <div className="sol-tag">
        <span className="sol-dot"></span>
        Our Solutions
      </div>

      <h2 className="sol-title">
        <span>Advertising & Marketing Solutions</span>
      </h2>

      <p>
        We help businesses build powerful brands, create impactful advertising
        campaigns, and drive measurable growth through strategic marketing
        solutions that increase visibility, engagement, and growth.
      </p>
    </div>

    <div className="sol-grid">

      {/* Card 1 - Branding */}
      <div className="sol-card">
        <div className="sol-img-placeholder sp1">
          <FaBullhorn className="sol-img-icon" />
        </div>

        <div className="sol-icon-wrap ic1">
          <FaBullhorn />
        </div>

        <div className="sol-body">
          <div className="sol-num nc1">Solution 01</div>

          <h3>Brand Strategy & Identity</h3>

          <p>
            Build a strong and memorable brand with professional logo design,
            brand identity development, and strategic positioning that helps
            your business stand out from competitors.
          </p>

          <div className="sol-footer">
            <div className="sol-chips">
              <span className="sol-chip sc1">Logo Design</span>
              <span className="sol-chip sc1">Brand Identity</span>
            </div>

            <button className="sol-arrow sa1">→</button>
          </div>
        </div>
      </div>

      {/* Card 2 - Advertising */}
      <div className="sol-card">
        <div className="sol-img-placeholder sp2">
          <FaAd className="sol-img-icon" />
        </div>

        <div className="sol-icon-wrap ic2">
          <FaAd />
        </div>

        <div className="sol-body">
          <div className="sol-num nc2">Solution 02</div>

          <h3>Advertising Campaigns</h3>

          <p>
            Reach the right audience through creative and result-driven
            advertising campaigns across digital, social media, print, and
            outdoor platforms.
          </p>

          <div className="sol-footer">
            <div className="sol-chips">
              <span className="sol-chip sc2">Digital Ads</span>
              <span className="sol-chip sc2">Campaign Strategy</span>
            </div>

            <button className="sol-arrow sa2">→</button>
          </div>
        </div>
      </div>

      {/* Card 3 - Marketing */}
      <div className="sol-card">
        <div className="sol-img-placeholder sp3">
          <FaChartLine className="sol-img-icon" />
        </div>

        <div className="sol-icon-wrap ic3">
          <FaChartLine />
        </div>

        <div className="sol-body">
          <div className="sol-num nc3">Solution 03</div>

          <h3>Digital Marketing Solutions</h3>

          <p>
            Accelerate business growth with data-driven marketing strategies,
            including social media management, content marketing, and lead
            generation services.
          </p>

          <div className="sol-footer">
            <div className="sol-chips">
              <span className="sol-chip sc3">Social Media</span>
              <span className="sol-chip sc3">Leads</span>
            </div>

            <button className="sol-arrow sa3">→</button>
          </div>
        </div>
      </div>

    </div>

  
  </div>
</section>



      {/* Expertise */}
     {/* Expertise */}
<section className="ab-expertise-section">
  <div className="expertise-blur blur1"></div>
  <div className="expertise-blur blur2"></div>

  <div className="container">

    <div className="ab-section-heading">
      <span className="ab-solutions-tag">Our Expertise</span>

      <h2>
        Driving Growth Through <span>Creative Excellence</span>
      </h2>

      <p>
        From branding and advertising to digital marketing and creative
        production, we deliver solutions that help businesses grow,
        engage audiences, and achieve measurable results.
      </p>
    </div>

    <div className="row g-4">
      {expertiseData.map((item, index) => (
        <div className="col-md-6 col-lg-3" key={index}>
          <div className="ab-expertise-card">

            <div className="ab-card-number">
              0{index + 1}
            </div>

            <div className="ab-expertise-icon">
              {item.icon}
            </div>

            <h4>{item.title}</h4>

            <div className="ab-card-line"></div>

          </div>
        </div>
      ))}
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