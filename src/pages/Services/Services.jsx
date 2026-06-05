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
    desc:"We create result-driven digital marketing strategies that increase visibility, generate leads, and maximize ROI.Our expertise in SEO, PPC, and content marketing ensures your brand reaches the right audience at the right time.",
  },

  {
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    icon:<FaLaptopCode />,
    title:"Website Development",
    desc:"Your website is your digital storefront.We build fast, responsive, SEO-optimized websites designed to rank higher on Google and convert visitors into customers.",
  },

  {
    image:"https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200",
    icon:<FaSearch />,
    title:"Social Media Marketing ",
    desc:"We turn brands into conversations.Our team builds engaging content strategies across Instagram, Facebook, LinkedIn, and more  helping you grow visibility, trust, and audience engagement.",
  },

  {
    image:"https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200",
    icon:<FaPaintBrush />,
    title:"Branding & Design",
    desc:"Your brand is your first impression, we make it unforgettable.From logo design to complete brand identity, we create visually compelling and emotionally engaging brand experiences.",
  },

  {
    image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200",
    icon:<FaVideo />,
    title:"Video Editing",
    desc:"We create scroll-stopping content that converts.From Reels to YouTube videos, our editing brings your brand story to life with cinematic quality and high engagement.",
  },

  {
    image:"https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200",
    icon:<FaFacebook />,
    title:"Social Media Marketing",
    desc:"We turn brands into conversations.Our team builds engaging content strategies across Instagram, Facebook, LinkedIn, and more  helping you grow visibility, trust, and audience engagement.",
  },

  {
    image:"https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200",
    icon:<FaGoogle />,
    title:"Google Ads / PPC",
    desc:"Reach customers actively searching for your services.Our Google Ads experts create high-converting campaigns that boost traffic, generate leads, and maximize returns.",
  },

  {
    image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    icon:<FaChartLine />,
    title:"Lead Generation",
    desc:"We connect your business with ready-to-buy customers.Using funnels, landing pages, and automation, we turn interest into revenue and help you scale sustainably.",
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

      {/* LEFT CONTENT */}
      <div className="col-lg-6">

        <span className="why-tag">WHY CHOOSE US</span>

        <h2>
          <span>Why Choose AB Marketing Wings?</span>
        </h2>

        <p className="why-description">
          We help brands grow through innovative digital marketing,
          creative storytelling and performance-driven strategies.
       
        </p>

        <div className="why-features">

          <div className="why-item">
            <span>🎯</span>
            <div>
              <h5>Tailored Solutions For Every Brand</h5>
              <p>
                No two businesses are the same. We create customized
                digital marketing strategies aligned with your goals.
                
              </p>
            </div>
          </div>

          <div className="why-item">
            <span>📈</span>
            <div>
              <h5>ROI-Driven Approach</h5>
              <p>
                Every campaign is built to generate measurable results,
                ensuring your marketing investment translates into
                real business growth.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span>🤖</span>
            <div>
              <h5>AI-Powered Marketing Strategies</h5>
              <p>
                We leverage AI tools and advanced analytics to optimize
                campaigns, improve targeting and maximize performance.
              </p>
            </div>
          </div>

          <div className="why-item">
            <span>🚀</span>
            <div>
              <h5>Always Ahead Of The Market Curve</h5>
              <p>
                Trends change fast and we move faster. Our team stays
                updated with the latest platforms, technologies.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="col-lg-6 text-center">

        <div className="why-img-box">
          <img
            src={`${import.meta.env.BASE_URL}ab_logo.png`}
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