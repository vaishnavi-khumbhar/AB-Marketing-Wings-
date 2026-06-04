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
    image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    icon:<FaBullhorn />,
    title:"Digital Marketing",
    desc:"Data-driven marketing strategies that increase visibility and generate quality leads.",
  },

  {
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    icon:<FaLaptopCode />,
    title:"Website Development",
    desc:"Responsive, modern and SEO-friendly websites designed to convert visitors.",
  },

  {
    image:"https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200",
    icon:<FaSearch />,
    title:"SEO Optimization",
    desc:"Improve rankings, traffic and visibility with powerful SEO techniques.",
  },

  {
    image:"https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200",
    icon:<FaPaintBrush />,
    title:"Branding & Design",
    desc:"Build memorable brand identities through creative design and storytelling.",
  },

  {
    image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200",
    icon:<FaVideo />,
    title:"Video Editing",
    desc:"Create engaging reels, ads and YouTube content that attracts attention.",
  },

  {
    image:"https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200",
    icon:<FaFacebook />,
    title:"Social Media Marketing",
    desc:"Grow your audience and engagement through strategic social campaigns.",
  },

  {
    image:"https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200",
    icon:<FaGoogle />,
    title:"Google Ads / PPC",
    desc:"Reach customers actively searching for your products and services.",
  },

  {
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    icon:<FaChartLine />,
    title:"Lead Generation",
    desc:"Generate quality leads and convert prospects into loyal customers.",
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
    <div className="row g-4">

      {services.map((service, index) => (
        <div className="col-lg-3 col-md-6" key={index}>

          <div className="service-card">

            {/* IMAGE */}
           <div className="service-img">
  <img
    src={service.image}
    alt={service.title}
  />
</div>

            {/* ICON */}
            <div className="service-icon">
              {service.icon}
            </div>

            <h4>{service.title}</h4>

            <p>{service.desc}</p>

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

      <div className="col-lg-6">

        <span className="why-tag">WHY CHOOSE US</span>

        <h2>
           <span>Why Choose AB Marketing Wings?</span>
        </h2>

        <div className="why-features">

          <div className="why-item">
            <span>🚀</span><p>Customized Marketing Strategy</p>
          </div>

          <div className="why-item">
            <span>📈</span><p>ROI Driven Campaigns</p>
          </div>

          <div className="why-item">
            <span>🤖</span><p>AI Powered Marketing Solutions</p>
          </div>

          <div className="why-item">
            <span>📊</span><p>Transparent Reporting</p>
          </div>

          <div className="why-item">
            <span>🎯</span><p>Dedicated Support Team</p>
          </div>

          <div className="why-item">
            <span>🔥</span><p>Creative + Performance Approach</p>
          </div>

        </div>
      </div>

      <div className="col-lg-6 text-center">

        <div className="why-img-box">
          <img src="/ab_logo.png" alt="AB Marketing Wings" />

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