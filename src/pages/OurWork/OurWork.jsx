import "./OurWork.css";

function OurWork() {
  // client images templates
  const projects = [
  {
    img: `${import.meta.env.BASE_URL}why/Balaji_Electronics.jpg`,
    title: "Balaji Electronics",
    category: "Electronics",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Elite_Academia.jpg`,
    title: "Elite Academia",
    category: "Education",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Exttreme_Corp.jpg`,
    title: "Exttreme Corp",
    category: "Corporate",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Finance_Direction.jpg`,
    title: "Finance",
    category: "Financial Services",
  },
  {
    img: `${import.meta.env.BASE_URL}why/KP_Academy.jpg`,
    title: "KP Academy",
    category: "Education",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Lifetime_Number.jpg`,
    title: "Lifetime Number",
    category: "Numerology",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Motion_Solapur.jpg`,
    title: "Motion Solapur",
    category: "Education",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Pandharpuram_Palace.jpg`,
    title: "Pandharpuram Palace",
    category: "Hospitality",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Prime_Electronics.jpg`,
    title: "Prime Electronics",
    category: "Electronics",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Reliable_Travel.jpg`,
    title: "Reliable Travel",
    category: "Travel",
  },
  {
    img: `${import.meta.env.BASE_URL}why/SkinCare_Clinic.jpg`,
    title: "SkinCare Clinic",
    category: "Healthcare",
  },
  {
    img: `${import.meta.env.BASE_URL}why/Unity_Hospital.jpg`,
    title: "Unity Hospital",
    category: "Healthcare",
  },
];

  // our client logo
 const clients = [
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Avicare.png`,
    name: "Avicare",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Balaji Electronics.png`,
    name: "Balaji Electronics",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Elite Landmarks.png`,
    name: "Elite Landmarks",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Finance Direction.png`,
    name: "Finance Direction",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Gavran Eggswala.png`,
    name: "Gavran Eggswala",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Lifetime Number.png`,
    name: "Lifetime Number",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Motion Solapur.png`,
    name: "Motion Solapur",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Oviyas.png`,
    name: "Oviyas",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Shipal Line.png`,
    name: "Shipal Line",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Swami Software.png`,
    name: "Swami Software",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Unity Hospital.png`,
    name: "Unity Hospital",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Varad Clinic.png`,
    name: "Varad Clinic",
  },
  {
    logo: `${import.meta.env.BASE_URL}client_logo/Voltaic Electric.png`,
    name: "Voltaic Electric",
  },
];
  return (
    <>
      {/* Hero */}

   <section className="work-hero">
  <div className="work-floating-circle work-circle1"></div>
  <div className="work-floating-circle work-circle2"></div>

  <div className="work-hero-content">
    <div className="work-badge">OUR PORTFOLIO</div>

    <h1>
      Our Creative <span>Work</span>
    </h1>

    <p>
      We help businesses achieve measurable growth through creative,
      performance-driven marketing and design solutions.
    </p>
  </div>
</section>


      {/* Portfolio */}

      <section className="portfolio-section section-padding">
        <div className="container">

          <div className="section-title text-center mb-5">
<h2>Explore Our Latest Creations</h2>

          </div>

          <div className="row g-4">

            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>

                <div className="portfolio-card">

                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid"
                  />

                  <div className="portfolio-overlay">

                    <h4>{project.title}</h4>

                    <span>{project.category}</span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


{/* case study */}
  <section className="case-study">

  <div className="container">

    <div className="case-wrapper">

      {/* IMAGE SIDE */}
      <div className="case-image">
       <div className="case-image">
  <img
    src={`${import.meta.env.BASE_URL}Client_review.jpeg`}
    alt="Shipal Logistics Case Study"
  />
</div>
      </div>

      {/* CONTENT SIDE */}
      <div className="case-content">

        <span className="case-badge">
          Logistics Case Study
        </span>

        <h2>
          Elevating Shipal Line's Brand Presence
        </h2>

        <p>
          When Shipal partnered with AB Marketing Wings, the goal was
          simple — to build a brand that businesses trust before they
          even make an inquiry.
        </p>

        <div className="case-results">

          <div>✔ Consistent brand visibility across digital platforms</div>

          <div>✔ Stronger industry authority and credibility</div>

          <div>✔ Improved audience engagement and brand recall</div>

          <div>
            ✔ Enhanced awareness of logistics and global shipping services
          </div>

        </div>

        <p className="case-description">
          Through strategic storytelling, industry-focused content,
          creative branding, and social media management, we helped
          Shipal establish itself as a reliable logistics partner in an
          increasingly competitive market.
        </p>

        <div className="case-quote">
           Because in logistics, trust moves faster than cargo.
        </div>

        <div className="case-result-box">
          <strong>Result:</strong> A stronger brand, greater visibility,
          and a digital presence that supports long-term business growth.
        </div>

      </div>

    </div>

  </div>

</section>





<section className="success-section">
  <div className="success-card">

    <div className="success-left">
      <div className="big-number">60+</div>
      <p>Orders Generated</p>
      <span>Within 48 Hours</span>
    </div>

    <div className="success-right">

      <span className="success-tag">
         Client Success Story
      </span>

      <h2>Gavran Eggswala Campaign</h2>

      <p>
        We executed a highly targeted digital marketing campaign
        that generated 60+ orders in just 2 days through strategic
        audience targeting and performance optimization.
      </p>

      <div className="success-points">
        <div>✔ Brand Visibility Increased</div>
        <div>✔ Higher Customer Engagement</div>
        <div>✔ Fast & Measurable Growth</div>
      </div>

    </div>

  </div>
</section>

    {/* Results */}

      <section className="results-section">
  <div className="container">

    <div className="results-grid">

      <div className="result-card">
        <h2>50+</h2>
        <p>Brands Served</p>
      </div>

      <div className="result-card">
        <h2>100+</h2>
        <p>Campaigns</p>
      </div>

      <div className="result-card">
        <h2>5000+</h2>
        <p>Leads Generated</p>
      </div>

      <div className="result-card">
        <h2>95%</h2>
        <p>Client Satisfaction</p>
      </div>

    </div>

  </div>
</section>




{/* our client logos */}
<section className="clients-section">

   <span className="client-tag">Our Clients</span>

  <h2 className="clients-title">Our Happy Clients</h2>

  <div className="clients-slider">
    <div className="slide-track">
      {[...clients, ...clients].map((client, index) => (
        <div className="client-item" key={index}>
          <img
            className="client-logo"
            src={client.logo}
            alt={client.name}
          />
          <div className="client-name">{client.name}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials */}

     <section className="testimonial-section">

  <div className="container">

    <div className="testimonial-header">
         <span className="client-tag">Feedback</span>

      <h2>What Clients Say</h2>
      <p>Real feedback from businesses we’ve helped grow.</p>
    </div>

    <div className="testimonial-grid">

      <div className="testimonial-card">
        <p>
          “AB Marketing Wings transformed our online presence and delivered real results.”
        </p>
        <h5>Varad Skincare Clinic</h5>
        <span>Healthcare Client</span>
      </div>

      <div className="testimonial-card">
        <p>
          “Professional team, excellent branding and outstanding marketing support.”
        </p>
        <h5>Business Client</h5>
        <span>Branding Project</span>
      </div>

      <div className="testimonial-card">
        <p>
          “Their strategy helped us generate quality leads consistently.”
        </p>
        <h5>Startup Founder</h5>
        <span>Growth Campaign</span>
      </div>

    </div>

  </div>
</section>









    
    </>
  );
}

export default OurWork;