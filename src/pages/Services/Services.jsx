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
    image:"https://www.munro.agency/wp-content/uploads/2025/03/digital-marketing.jpg",
    icon:<FaBullhorn />,
    title:"Digital Marketing",
    desc:"Data-driven marketing that increases visibility, generates leads, and drives measurable growth.",
  },

  {
    image:"https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/767bc10a0c44b0a67be1a94aea270205-1609336032121/website%20development-min.jpg",
    icon:<FaLaptopCode />,
    title:"Website Development",
    desc:"Fast, responsive, and SEO-optimized websites built to convert visitors into customers.",
  },

  {
    image:"https://sonarplatform.com/wp-content/uploads/2023/02/Social-Media-Marketing.png",
    icon:<FaSearch />,
    title:"Social Media Marketing ",
    desc:"Engaging content and smart strategies that turn followers into customers.",
  },

  {
    image:"https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200",
    icon:<FaPaintBrush />,
    title:"Branding & Creative Design",
    desc:"Build a memorable brand with powerful visuals and a strong identity.",
  },

  {
    image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200",
    icon:<FaVideo />,
    title:"Video Editing",
    desc:"High-impact videos and content designed to capture attention and boost engagement.",
  },

  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4-E0h4O6CkeYRKSmkynPz3yiBwTnZ0OYKieevx3HLA&s=10",
    icon:<FaGoogle />,
    title:"Google Ads / PPC",
    desc:"Reach customers actively searching for your services and maximize your ROI.",
  },

  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC1y8O3ff6Wg0Emj2Y8TD4be63_iqc_52XDPzCQM3Gg&s=10",
    icon:<FaChartLine />,
    title:"Meta Advertising",
    desc:"Targeted Facebook and Instagram campaigns that generate quality leads and sales.",
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