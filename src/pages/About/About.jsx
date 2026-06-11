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
              About Us

            </span>

            <h1>
               About Advertising and
              <span>  Branding Marketing
</span>
            </h1>

            

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
        

        <h2>
        About Advertising & Branding Marketing

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
    <h4>Founder : Arti Hulle</h4>
    <span>Founded in  2025 </span>
  </div>
      </div>

      {/* Content */}
      <div className="col-lg-6 order-3 order-lg-2">

        {/* Desktop Heading */}
        <div className="d-none d-lg-block">
         
          <h2>
About Advertising and Branding Marketing
  
       </h2>
        </div>

      <p>
  Advertising & Branding Marketing is a full-service digital marketing agency dedicated to helping businesses grow through innovative marketing strategies and creative branding solutions.
Our expertise includes social media marketing, search engine optimization (SEO), Meta advertising, Google Ads management, website design and development, branding, and content creation.

</p>

<p>
  We believe every business deserves a strong digital presence. Our team focuses on creating customized marketing strategies that attract the right audience, generate quality leads, and improve overall business performance.
          Whether you are a startup, local business, healthcare provider, educational institute, real estate company, or established enterprise, we help you build a powerful online presence and achieve sustainable growth.


</p>



      </div>

    </div>
  </div>
</section>


{/* why chosse  */}
<section className="ab-why-section">
  <div className="container">

    <div className="ab-why-header">
      <span>Why Choose Us</span>
      <h2>Why Choose AB Marketing?</h2>
      <p>
        We don't just run campaigns — we create strategies that drive
        real business growth and long-term success.
      </p>
    </div>

    <div className="ab-why-grid">

      <div className="ab-why-item">
        <div className="ab-check">✓</div>
        <div>
          <h3>Results Driven Approach</h3>
          <p>Every campaign is designed with measurable business goals.</p>
        </div>
      </div>

      <div className="ab-why-item">
        <div className="ab-check">✓</div>
        <div>
          <h3>Creative Excellence</h3>
          <p>Designs and content that make your brand stand out.</p>
        </div>
      </div>

      <div className="ab-why-item">
        <div className="ab-check">✓</div>
        <div>
          <h3>Multi-Channel Expertise</h3>
          <p>Meta Ads, Google Ads, SEO, Social Media & Website Development.</p>
        </div>
      </div>

      <div className="ab-why-item">
        <div className="ab-check">✓</div>
        <div>
          <h3>Transparent Reporting</h3>
          <p>Know exactly where your marketing investment goes.</p>
        </div>
      </div>

      <div className="ab-why-item">
        <div className="ab-check">✓</div>
        <div>
          <h3>Dedicated Support</h3>
          <p>Quick communication and continuous optimization.</p>
        </div>
      </div>

    </div>
  </div>
</section>






      {/* Solutions */}
      
  <section className="ab-solutions-section">
  

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
  

  <div className="container">

    <div className="ab-section-heading">
      <span className="ab-solutions-tag">Our Expertise</span>

      <h2>
       <span>  Driving Growth Through Creative Excellence</span>
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