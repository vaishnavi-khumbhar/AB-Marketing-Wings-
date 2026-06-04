import "./OurWork.css";

function OurWork() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Digital Marketing Campaign",
      category: "Marketing",
    },
    {
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      title: "Brand Identity Design",
      category: "Branding",
    },
    {
      img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
      title: "Website Development",
      category: "Web Design",
    },
    {
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Social Media Growth",
      category: "Social Media",
    },
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Lead Generation Campaign",
      category: "Lead Generation",
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "SEO Optimization",
      category: "SEO",
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
            <h2>Featured Projects</h2>
            <p>
              Some of the impactful projects we've delivered.
            </p>
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

      <div className="case-image">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
          alt="Case Study"
        />
      </div>

      <div className="case-content">
        <span className="case-badge">CASE STUDY</span>

        <h2>Varad Skincare Clinic</h2>

        <p>
          We partnered with Varad Skincare Clinic, Aurangabad to strengthen
          their digital presence and generate measurable business growth.
        </p>

        <div className="case-results">
          <div>✔ 100% Increase in Online Engagement</div>
          <div>✔ Significant Growth in Inquiries</div>
          <div>✔ Increased Patient Footfall</div>
          <div>✔ Strong Local Brand Positioning</div>
        </div>
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

      {/* Testimonials */}

     <section className="testimonial-section">
  <div className="container">

    <div className="testimonial-header">
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