import "./Services.css";

import {
  FaBullhorn,
  FaLaptopCode,
  FaSearch,
  FaPaintBrush,
  FaVideo,
  FaFacebook,
  FaGoogle,
  FaChartLine,
} from "react-icons/fa";

function Services() {
  const services = [

  {
    image: `${import.meta.env.BASE_URL}Services/digital-marketing.jpg`,
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Data-driven marketing that increases visibility, generates leads, and drives measurable growth.",
  },

  {
    image: `${import.meta.env.BASE_URL}Services/website_development.webp`,
    icon: <FaLaptopCode />,
    title: "Website Development",
    desc: "Fast, responsive, and SEO-optimized websites built to convert visitors into customers.",
  },

  {
    image: `${import.meta.env.BASE_URL}Services/social-media.png`,
    icon: <FaSearch />,
    title: "Social Media Marketing",
    desc: "Engaging content and smart strategies that turn followers into customers.",
  },

  {
    image: `${import.meta.env.BASE_URL}Services/drand_design.jpg`,
    icon: <FaPaintBrush />,
    title: "Branding & Creative Design",
    desc: "Build a memorable brand with powerful visuals and a strong identity.",
  },

  {
    image: `${import.meta.env.BASE_URL}Services/video_editing.jpg`,
    icon: <FaVideo />,
    title: "Video Editing",
    desc: "High-impact videos and content designed to capture attention and boost engagement.",
  },

  {
    image: `${import.meta.env.BASE_URL}Services/google_ads.jpg`,
    icon: <FaGoogle />,
    title: "Google Ads / PPC",
    desc: "Reach customers actively searching for your services and maximize your ROI.",
  },

  {
    image: `${import.meta.env.BASE_URL}Services/meta.jpg`,
    icon: <FaChartLine />,
    title: "Meta Advertising",
    desc: "Targeted Facebook and Instagram campaigns that generate quality leads and sales.",
  },

];

  return (
    <>
      {/* Hero Section */}

     <section className="services-hero">

  <div className="services-floating-circle services-circle1"></div>
  <div className="services-floating-circle services-circle2"></div>

  <div className="container">

    <div className="services-hero-content">

      <span className="services-badge">
        Digital Marketing Services
      </span>

      <h1>
        Powerful Digital Solutions
        <span> For Modern Businesses</span>
      </h1>

      <p>
        Powerful digital solutions designed to grow your brand,
        increase visibility and drive measurable results.
      </p>

    </div>

  </div>

</section>




      {/* Service Cards */}
              
   <section className="services-section section-padding">
    
  <div className="container">
<span className="service-tag">Our Services</span>
    <div className="row g-4 align-items-stretch">

      {services.map((service, index) => (
        <div className="col-lg-4 col-md-6" key={index}>

          <div className="service-card">

            <div className="service-img">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            <div className="service-icon">
              {service.icon}
            </div>

            <div className="service-content">
              <h4>{service.title}</h4>

              <p>{service.desc}</p>
            </div>

          </div>

        </div>
      ))}

    </div>
  </div>
</section>



     {/* Why Choose Us */}
<section className="why-section">

  <div className="why-bg-circle why-bg1"></div>
  <div className="why-bg-circle why-bg2"></div>

  <div className="container">

    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <div className="col-lg-6">

        <span className="why-tag">Why Choose Us</span>

        <h2>
  <span>Your Success is Our Priority</span>
        </h2>

        <p className="why-description">
          We help brands grow through innovative digital marketing,
          creative storytelling and performance-driven strategies.
       
        </p>

        <div className="why-features">

          <div className="why-item">
            <span></span>
            <div>
              <h5>Tailored Strategies</h5>
              <p>
                Every business is unique. We create customized marketing solutions built around your goals, audience, and industry.

              </p>
            </div>
          </div>

          <div className="why-item">
            <span></span>
            <div>
              <h5>Results That Matter</h5>
              <p>
                Our focus is simple — generate leads, increase sales, and maximize your ROI.

              </p>
            </div>
          </div>

          <div className="why-item">
            <span></span>
            <div>
              <h5>AI-Powered Marketing
</h5>
              <p>
                We combine creativity with AI-driven insights to optimize campaigns and improve performance.

              </p>
            </div>
          </div>

          <div className="why-item">
            <span></span>
            <div>
              <h5>Stay Ahead of the Competition</h5>
              <p>
               Digital trends change fast. We help your brand stay relevant, visible, and one step ahead.

              </p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="col-lg-6 text-center">

        <div className="why-img-box">
          <img
            src={`${import.meta.env.BASE_URL}why_us.jpg`}
            alt="AB Marketing Wings"
          />
        </div>

      </div>

    </div>

  </div>

</section>


      {/* CTA */}

     <section className="services-cta">
  <div className="container">
    <h2>Ready To Grow Your Business?</h2>

    <p>
      Let's create a marketing strategy that delivers measurable growth
      and long-term success.
    </p>

  </div>
</section>
    </>
  );
}

export default Services;