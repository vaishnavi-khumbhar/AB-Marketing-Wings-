import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Hero from "../Hero/Hero";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaSearch, FaMap, FaRocket, FaChartLine } from 'react-icons/fa'; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaWhatsapp } from "react-icons/fa";

import { MdOutlineArrowOutward } from "react-icons/md";



function Home() {
  // google review
  const reviews = [
  {
    name: "Afiya Tanzeel",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVZw08bhkldOrbj0rzrOYF69onoKs5hlNMbud8Bsgzu8_73V-L3EA=w72-h72-p-rp-mo-br100",
    text: "The team at AB Marketing Wings is amazing. They listen and suggest strategies that actually work.They listen, understand your needs, and suggest the right strategies that really work."
  },
  {
    name: "Leena Chaudhari",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXgTSuPMIJMKLJ2OVKd7sffqR8X35fsAgQ--8fm6JrFsxqQ4pc5=w72-h72-p-rp-mo-br100",
    text: "AB Marketing Wings helped me grow📈 from scratch and built my profile in a very professional way.The environment is supportive, and mentors are always ready to guide you at every step"
  },
  {
    name: "Samikshaart academy",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWYCzcZZB8IxjxUKIiEtLZnFgmf3KOM0_UjJxVpICs2do9pSKVRww=w72-h72-p-rp-mo-br100",
    text: "A B Marketing Wings is handling our social media Samiksha Art Academy, along with running our paid campaigns. They provide the ⭐ Best digital marketing services in Kharadi!."
  },
  {
    name: "Yash Patil",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX93s1-hHJ0KMvMoZf68PwIEAdtJbWX72jq5K47KkVHOL9PI_-t=w72-h72-p-rp-mo-br100",
    text: "Really happy with A B Marketing Wings’ support They understood my business needs well and helped me reach more customers.Great team to work with, very professional and result-oriented."
  }
];

// flip industries
const industries = [
  { label: "Automobile", icon: "ti-car", tag: "Drive & Identity" },
  { label: "Banking Finance", icon: "ti-building-bank", tag: "Trust & Authority" },
  { label: "Professionals", icon: "ti-briefcase", tag: "Expertise & Prestige" },
  { label: "Education", icon: "ti-school", tag: "Learn & Inspire" },
  { label: "Event Branding", icon: "ti-confetti", tag: "Moments & Magic" },
  { label: "FMCG", icon: "ti-shopping-bag", tag: "Shelf & Impact" },
  { label: "Healthcare & Pharma", icon: "ti-pill", tag: "Care & Credibility" },
  { label: "Manufacturing", icon: "ti-tool", tag: "Build & Scale" },
  { label: "Community Engagement", icon: "ti-users", tag: "Connect & Grow" },
  { label: "Real Estate", icon: "ti-building-skyscraper", tag: "Space & Aspiration" },
  { label: "Restaurants", icon: "ti-tools-kitchen-2", tag: "Flavour & Feeling" },
  { label: "Travel & Tourism", icon: "ti-plane", tag: "Wander & Wonder" },
];

const [flipped, setFlipped] = useState({});

  const toggle = (label) =>
    setFlipped((prev) => ({ ...prev, [label]: !prev[label] }));

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

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.step').forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}, []);


  //   const slides = [
  //   {
  //     title: "Turn Attention Into Customers",
  //     subtitle: "Powerful digital marketing that grows Indian businesses.",
  //     image:
  //       "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
  //   },
  //   {
  //     title: "Generate High Quality Leads",
  //     subtitle: "Performance marketing that converts real customers in India.",
  //     image:
  //       "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1600&q=80",
  //   },
  //   {
  //     title: "Scale Your Business Faster",
  //     subtitle: "AI + Digital strategies built for modern Indian startups.",
  //     image:
  //       "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  //   },
  //   {
  //     title: "Build Powerful Brand Identity",
  //     subtitle: "Creative branding that stands out in Indian market.",
  //     image:
  //       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  //   },
  // ];

  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, []);

// BrandSection.jsx

  const services = [
    {
      number: "01",
      title: "Startup Branding",
      desc: "Igniting fresh brand identities that define and distinguish new businesses confidently.",
    },
    {
      number: "02",
      title: "Transforming Brands",
      desc: "Transforming existing brands with modern strategies for renewed relevance and impact.",
    },
    {
      number: "03",
      title: "Brand Design",
      desc: "Crafting customized visual identities tailored to any business, sector, or need.",
    },
  ];
  

  return (
    <>
       
      <Hero />







   {/* 1. WE SOLVE BUSINESS PROBLEMS */}

  <section className="problem-section" data-aos="fade-up">
  <div className="container">

    <div className="section-header">
      <span className="problem-tag">Business Challenges</span>
      <h2 className="problem-title">
  We Solve Business Problems
</h2>

<p className="problem-subtitle">
  Most businesses struggle with visibility, leads and conversions.
  We help transform these challenges into growth opportunities.
</p>
    </div>

     <div className="problem-grid">

      {/* Card 1 */}
      <div className="problem-card" data-aos="zoom-in">
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt="Lead Generation"
          />
        </div>

        <div className="problem-image">
          <img
            src={`${import.meta.env.BASE_URL}Home_Page/No_leads.jpg`}
            alt="No Leads Coming"
          />
        </div>

        <h4>No Leads Coming?</h4>
      </div>

      {/* Card 2 */}
      <div
        className="problem-card"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149678.png"
            alt="Brand Awareness"
          />
        </div>

        <div className="problem-image">
          <img
            src={`${import.meta.env.BASE_URL}Home_Page/Brand_Avness.webp`}
            alt="Low Brand Awareness"
          />
        </div>

        <h4>Low Brand Awareness?</h4>
      </div>

      {/* Card 3 */}
      <div
        className="problem-card"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Website Conversion"
          />
        </div>

        <div className="problem-image">
          <img
            src={`${import.meta.env.BASE_URL}Home_Page/Website_Conversion.jpg`}
            alt="Poor Website Conversion"
          />
        </div>

        <h4>Poor Website Conversion?</h4>
      </div>

      {/* Card 4 */}
      <div
        className="problem-card"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="Social Media"
          />
        </div>

        <div className="problem-image">
          <img
            src={`${import.meta.env.BASE_URL}Home_Page/Socia_media.png`}
            alt="Weak Social Media Presence"
          />
        </div>

        <h4>Weak Social Media Presence?</h4>
      </div>

    </div>

    <div className="solution-wrapper" data-aos="zoom-in-up">
      <div className="solution-box">
        Powerful marketing strategies, creative campaigns, and measurable
        results — everything your business needs to stand out and succeed.
      </div>
    </div>

  </div>
</section>






{/* 2. case study */}
{/*case study */}
<section className="brand-section">
  <div className="brand-container">

    {/* LEFT */}
    <div className="brand-left" data-aos="fade-right" data-aos-duration="800">
      <div className="brand-badge">
        <img
          src={`${import.meta.env.BASE_URL}ab_logo.png`}
          alt="logo"
          className="badge-logo"
        />
        <span>Brand Loud, Stand Proud</span>
      </div>

      <h1 className="brand-heading">
        Building Your <br /> Brand
      </h1>

      <p className="brand-desc" data-aos="fade-up" data-aos-delay="200">
        We craft bold, memorable brand identities that stand out
        and speak clearly. From startups to seasoned businesses,
        we build brands that people remember.
      </p>

     <Link
  to="/contact"
  className="brand-btn"
  data-aos="fade-up"
  data-aos-delay="400"
>
  Connect With Us →
</Link>

    </div>

    {/* RIGHT */}
    <div className="brand-right">
      {[
        { number: "01", title: "Startup Branding", desc: "Igniting fresh brand identities that define and distinguish new businesses confidently." },
        { number: "02", title: "Transforming Brands", desc: "Transforming existing brands with modern strategies for renewed relevance and impact." },
        { number: "03", title: "Brand Design", desc: "Crafting customized visual identities tailored to any business, sector, or need." },
      ].map((s, i) => (
        <div
          className="brand-service-item"
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 200}
          data-aos-duration="700"
        >
          <span className="service-number">{s.number}</span>
          <div className="service-content">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-line"></div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
    

{/* 3. flip industris  */}
  <div className="wrap">
      <div className="top">
        <div className="eyebrow">What We Do</div>
        <h2 className="title">Brand Creation Across<br /><em>Diverse Industries.</em></h2>
        <div className="divider">
          <span /><i className="ti ti-flame" /><span />
        </div>
      </div>

      <div className="grid">
        {industries.map((item, i) => (
          <div
            key={item.label}
            className={`flip-wrap ${flipped[item.label] ? "active" : ""}`}
            style={{ animationDelay: `${0.04 + i * 0.04}s` }}
            onClick={() => toggle(item.label)}
          >
            <div className="flip-inner">
              <div className="face front">
                <div className="icon-ring">
                  <i className={`ti ${item.icon}`} aria-hidden="true" />
                </div>
                <span className="front-lbl">{item.label}</span>
              </div>
              <div className="face back">
                <i className={`ti ${item.icon} back-icon`} aria-hidden="true" />
                <span className="back-lbl">{item.label}</span>
                <span className="back-tag">{item.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="hint"><i className="ti ti-hand-finger" /> Hover to flip</p>
    </div>


{/* 4 services */}
<section className="services-grid" data-aos="fade-up">

  <div className="section-header">
    <span className="service-tag">Our Expertise</span>
    <h2 className="section-title">Digital Services</h2>
    <p className="section-desc">
      Powerful digital solutions designed to grow your brand,
      generate leads, and boost your online presence.
    </p>
  </div>

  <div className="grid">

  {/* Website Development */}
  <div className="marketing-service-card">

    <img
      src={`${import.meta.env.BASE_URL}Home_Page/Website_Development.jpg`}
      alt="Website Development"
      className="marketing-service-image"
    />

    <h3>Website Development</h3>

    <p>
      Fast, responsive, and SEO-optimized websites built to convert visitors into customers.
    </p>

    <Link
      to="/services"
      className="marketing-read-btn"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span>Read More</span>
      <MdOutlineArrowOutward className="btn-icon" />
    </Link>

  </div>

  {/* Social Media Marketing */}
  <div className="marketing-service-card">

    <img
      src={`${import.meta.env.BASE_URL}Home_Page/Social_media.jpg`}
      alt="Social Media Marketing"
      className="marketing-service-image"
    />

    <h3>Social Media Marketing</h3>

    <p>
      Engaging content and smart strategies that turn followers into customers.
    </p>

    <Link
      to="/services"
      className="marketing-read-btn"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span>Read More</span>
      <MdOutlineArrowOutward className="btn-icon" />
    </Link>

  </div>

  {/* Paid Advertising */}
  <div className="marketing-service-card">

    <img
      src={`${import.meta.env.BASE_URL}Home_Page/Paid_advertising.jpg`}
      alt="Paid Advertising"
      className="marketing-service-image"
    />

    <h3>Paid Advertising</h3>

    <p>
      Run high-performing Meta & Google Ads that reach the right audience and bring instant, quality leads to your business.
    </p>

    <Link
      to="/services"
      className="marketing-read-btn"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span>Read More</span>
      <MdOutlineArrowOutward className="btn-icon" />
    </Link>

  </div>

  {/* Video Editing */}
  <div className="marketing-service-card">

    <img
      src={`${import.meta.env.BASE_URL}Home_Page/Video_editing.jpg`}
      alt="Video Editing"
      className="marketing-service-image"
    />

    <h3>Video Editing</h3>

    <p>
High-impact videos and content designed to capture attention and boost engagement, conversions, and growth.    </p>

    <Link
      to="/services"
      className="marketing-read-btn"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span>Read More</span>
      <MdOutlineArrowOutward className="btn-icon" />
    </Link>

  </div>

</div>
  

</section>




{/*  6 our client logos */}
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



{/* 5. STRONG CTA SECTION */}

  
     <section className="cta-section">
    

      <div className="cta-content">

        <div className="cta-text">
          <h2>
            Stop Losing Customers Online
          </h2>

          <p>
            Transform your digital presence with powerful marketing,
            creative content and high-converting campaigns.
          </p>

          <div className="cta-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get Free Consultation

            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/contact")}
            >
              Talk to an Expert

            </button>
            
          </div>
        </div>

      </div>
    </section>
  







{/*  7. TESTIMONIALS */}
<section className="testimonial-section">


  <div className="testimonial-header">
    <span className="review-tag"> Google Reviews</span>

    <h2 className="section-title">
      What Our Clients Say
    </h2>

    <p>
      Trusted by businesses across Maharashtra for delivering
      measurable digital marketing results.
    </p>
  </div>

  <div className="google-badge">
    <img
      src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
      alt="Google"
    />
    <span>5.0 Rating | 19 Reviews</span>
  </div>

  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={30}
    slidesPerView={3}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    }}
  >
    {reviews.map((review, index) => (
      <SwiperSlide key={index}>
        <div className="testimonial-card">

          <div className="review-top">
           <img
  src={review.image}
  alt={review.name}
  className="review-user"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=ff6b00&color=fff&size=72`;
  }}
/>

            <div>
              <h4>{review.name}</h4>
              <span>Google Review</span>
            </div>
          </div>

          <div className="stars">⭐⭐⭐⭐⭐</div>

          <p className="review-text">
            {review.text}
          </p>

        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="review-btn-wrap">
    <button
  className="review-btn"
  onClick={() =>
    window.open(
      "https://share.google/m596xmrDsskdqvhK7",
      "_blank"
    )
  }
>
  View All Google Reviews →
</button>
  </div>

</section>



{/* 8. FREE AUDIT BOX */}

    <section className="audit-section">
     

      <div className="audit-glow glow1"></div>
      <div className="audit-glow glow2"></div>

      <div className="audit-box">

        <div className="audit-icon">
          <FaRocket />
        </div>

        <span className="audit-tag">
           Limited Time Offer
        </span>

        <h2>
          Get Your <span>FREE Marketing Audit</span>
        </h2>

        <p>
          Discover what's stopping your business from growing online.
          Get a personalized strategy report from our experts.
        </p>


        <button
          className="audit-btn"
          onClick={() => navigate("/contact")}
        >
          Claim Free Audit →
        </button>

      </div>

    </section>
  



</>
  );
}

export default Home;