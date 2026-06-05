import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaRocket,
  FaChartLine,
  FaTasks
} from "react-icons/fa";

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

    const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    {
      title: "Turn Attention Into Customers",
      subtitle: "Powerful digital marketing that grows Indian businesses.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Generate High Quality Leads",
      subtitle: "Performance marketing that converts real customers in India.",
      image:
        "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Scale Your Business Faster",
      subtitle: "AI + Digital strategies built for modern Indian startups.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Build Powerful Brand Identity",
      subtitle: "Creative branding that stands out in Indian market.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <section className="hero">

      {/* BACKGROUND SLIDER */}
      <div className="hero-bg">
        <img
          src={slides[current].image}
          alt="slide"
          className="bg-image"
        />
        <div className="overlay"></div>
        <div className="color-overlay"></div>
      </div>

      {/* CONTENT */}
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* TEXT */}
          <div className="col-lg-6 text-box">

            <div className="brand-badge">
              AB MARKETING WINGS
            </div>

            <h1 className="title fade-text">
              {slides[current].title}
            </h1>

            <p className="subtitle fade-text">
              {slides[current].subtitle}
            </p>

<div className="hero-buttons">
              {/* CONTACT BUTTON */}
              <button
                className="btn primary pulse-btn"
                onClick={() => navigate("/contact")}
              >
                Book Free Consultation
              </button>

              <button className="btn outline" onClick={() =>  navigate("/services")}>
                View Services
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE WITH RATING BADGE */}
          <div className="col-lg-6 text-center image-wrapper">

            <div className="image-card">

             <img
  src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
  className="hero-icon"
  alt="AI Marketing"
/>                

  <div className="floating-card leads-card">
    🚀 500+ Leads Generated
  </div>

  <div className="floating-card roi-card">
    📈 4X ROI Growth
  </div>

  <div className="floating-card client-card">
    ⭐ Trusted By Businesses
  </div>



            </div>

          </div>

        </div>
      </div>

    </section>


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

      <div className="problem-card" data-aos="zoom-in">
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
            alt=""
          />
        </div>

        <div className="problem-image">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800"
            alt=""
          />
        </div>

        <h4>No Leads Coming?</h4>
      </div>

      <div className="problem-card" data-aos="zoom-in" data-aos-delay="100">
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149678.png"
            alt=""
          />
        </div>

        <div className="problem-image">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
            alt=""
          />
        </div>

        <h4>Low Brand Awareness?</h4>
      </div>

      <div className="problem-card" data-aos="zoom-in" data-aos-delay="200">
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        </div>

        <div className="problem-image">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
            alt=""
          />
        </div>

        <h4>Poor Website Conversion?</h4>
      </div>

      <div className="problem-card" data-aos="zoom-in" data-aos-delay="300">
        <div className="icon-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt=""
          />
        </div>

        <div className="problem-image">
          <img
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800"
            alt=""
          />
        </div>

        <h4>Weak Social Media Presence?</h4>
      </div>

    </div>

    <div className="solution-wrapper" data-aos="zoom-in-up">
      <div className="solution-box">
        🚀 AB Marketing Wings fixes all these problems &
        helps your business grow faster.
      </div>
    </div>

  </div>
</section>

{/* 2. RESULTS SHOWCASE */}
<section className="stats-section" data-aos="fade-up">

  <div className="container">

    <div className="section-header">
      <span className="stats-tag">Our Performance</span>
<h2 className="orange-results-heading">
  Our Results Speak
</h2>
<p className="results-subtitle">
  Numbers don't lie. We help businesses generate more leads,
  increase ROI and build stronger brands.
</p>
    </div>

    <div className="stats-orbit">

      {/* Center Logo */}
      <div className="center-logo">
        <img src={`${import.meta.env.BASE_URL}ab_logo.png`} alt="AB Marketing Wings" />
      </div>

      {/* Stats Cards */}

      <div className="orbit-card card1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
        <h3>100%</h3>
        <p>Lead Growth</p>
      </div>

      <div className="orbit-card card2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4305/4305512.png"
          alt=""
        />
        <h3>3X</h3>
        <p>ROI Boost</p>
      </div>

      <div className="orbit-card card3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt=""
        />
        <h3>50+</h3>
        <p>Brands Scaled</p>
      </div>

      <div className="orbit-card card4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
          alt=""
        />
        <h3>1M+</h3>
        <p>Ad Reach</p>
      </div>

    </div>

  </div>

</section>


{/* 3. CASE STUDY (BEFORE vs AFTER) */}
<section className="case-section" data-aos="fade-up">
  <div className="blue-blob blob1"></div>
  <div className="blue-blob blob2"></div>

  <div className="container">

    {/* SECTION HEADER */}
    <div className="case-header">
      <span className="case-tag">Growth Strategy</span>

      <h2 className="case-title">
        Our Digital Marketing Framework
      </h2>

      <p className="case-subtitle">
        A powerful combination of Google Ads, Meta Ads, Content Creation,
        UGC Video Shoots, Influencer Marketing and Social Media Management
        designed to generate leads, increase visibility and accelerate business growth.
      </p>
    </div>

    {/* CASE STUDY */}
    <div className="case-story" data-aos="zoom-in">

      <div className="clinic-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
          alt="Varad Skincare Clinic"
        />
      </div>

      <h3>Case Study: Varad Skincare Clinic</h3>

      <p>
        We partnered with <b>Varad Skincare Clinic, Sambhaji Nagar</b> to
        transform their digital presence and drive real business growth through
        Meta Ads, content marketing and strategic branding.
      </p>

      {/* STRATEGY CARDS */}
      <div className="case-highlights">

        <div className="highlight-card">
          🎯 Google Ads Campaign Management
        </div>

        <div className="highlight-card">
          🚀 Meta Ads Lead Generation
        </div>

        <div className="highlight-card">
          🎬 UGC Video Shoot & Production
        </div>

        <div className="highlight-card">
          📸 Creative Content Creation
        </div>

        <div className="highlight-card">
          ⭐ Influencer Marketing
        </div>

        <div className="highlight-card">
          📱 Social Media Management
        </div>

      </div>

      <p>
        By combining performance marketing, content creation, UGC videos,
        influencer collaborations and strategic branding, we positioned
        the clinic as a trusted skincare brand while generating consistent
        engagement, inquiries and business growth.
      </p>

    </div>

    {/* RESULTS */}
    <div className="vs-divider">
      <span>RESULTS DELIVERED</span>
    </div>

    <div className="case-grid">

      {/* BEFORE */}
      <div className="case-card before" data-aos="fade-right">

        <div className="status-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
            alt="Before"
          />
        </div>

        <h3>Before</h3>

        <ul>
          <li>Low Brand Awareness</li>
          <li>Limited Online Reach</li>
          <li>Weak Social Media Presence</li>
          <li>Low Patient Inquiries</li>
          <li>No Structured Marketing Strategy</li>
        </ul>

      </div>

      {/* AFTER */}
      <div className="case-card after" data-aos="fade-left">

        <div className="status-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="After"
          />
        </div>

        <h3>After</h3>

        <ul>
          <li>🚀 100% Increase in Online Engagement</li>
          <li>📈 More Inquiries & Patient Footfall</li>
          <li>⭐ Strong Local Brand Positioning</li>
          <li>📱 Consistent Social Media Growth</li>
          <li>💰 Better Lead Generation & Conversions</li>
        </ul>

      </div>

    </div>

  </div>
</section>



{/* 4 services */}
<section className="services-grid" data-aos="fade-up">

  <div className="section-header">
    <span className="service-tag">Our Expertise</span>
    <h2 className="section-title">Digital Services</h2>
    <p className="section-desc">
      Powerful digital solutions designed to grow your brand,
      generate leads and boost online visibility.
    </p>
  </div>

  <div className="grid">

    {/* Website Development */}
    <div className="marketing-service-card">

      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
        alt="Website Development"
        className="marketing-service-image"
      />

      <h3>Website Development</h3>

      <p>
        Your website is your digital storefront.
        Modern, responsive and high-converting websites
        designed to elevate your business online.
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

    {/* SEO */}
    <div className="marketing-service-card">

      <img
        src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800"
        alt="Social Media Marketing"
        className="marketing-service-image"
      />

      <h3>Social Media Marketing </h3>

      <p>
        Our team builds engaging content strategies across Instagram and more helping you grow trust, and audience engagement.

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

    {/* Social Media */}
    <div className="marketing-service-card">

      <img
        src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800"
        alt="Social Media Marketing"
        className="marketing-service-image"
      />

      <h3>Social Media Growth</h3>

      <p>
        Build a strong online presence with engaging content
        and audience-focused campaigns.
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

    {/* Paid Ads */}
    <div className="marketing-service-card">

      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
        alt="Paid Advertising"
        className="marketing-service-image"
      />

      <h3>Paid Advertising</h3>

      <p>
        Generate leads and maximize ROI through
        strategic Meta & Google Ads campaigns.
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

  </div>

</section>


{/* 5. STRONG CTA SECTION */}

  
     <section className="cta-section">
      <div className="cta-circle cta-circle-1"></div>
<div className="cta-circle cta-circle-2"></div>
<div className="cta-circle cta-circle-3"></div>

      <div className="cta-content">

        <div className="cta-text">
          <h2>
            Stop Losing <span>Customers Online</span>
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
              Book Free Strategy Call
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/contact")}
            >
              Get Free Audit Report
            </button>
            
          </div>
        </div>

      </div>
    </section>
  






{/* 6. HOW WE WORK */}


<section className="work-section" data-aos="fade-up">
<div className="orange-spot spot-1"></div>
<div className="orange-spot spot-2"></div>

  <div className="work-header">
    <span className="work-tag">Our Process</span>
    <h2 className="section-title">
      How We Work
    </h2>
    <p>
      We follow a proven marketing framework that helps
      businesses attract more leads, increase engagement,
      and scale faster.
    </p>
  </div>

  <div className="work-grid">

    <div className="work-card">
      <div className="work-icon">
        <FaSearch />
      </div>
      <span className="step-number">01</span>
      <h3>Discover</h3>
      <p>
        Understand your business, audience and market opportunities.
      </p>
    </div>

    <div className="work-card">
      <div className="work-icon">
        <FaTasks />
      </div>
      <span className="step-number">02</span>
      <h3>Plan</h3>
      <p>
        Create a customized digital strategy designed for growth.
      </p>
    </div>

    <div className="work-card">
      <div className="work-icon">
        <FaRocket />
      </div>
      <span className="step-number">03</span>
      <h3>Execute</h3>
      <p>
        Launch campaigns, content and ads with precision.
      </p>
    </div>

    <div className="work-card">
      <div className="work-icon">
       <FaTasks />
      </div>
      <span className="step-number">04</span>
      <h3>Scale</h3>
      <p>
        Analyze performance and continuously improve results.
      </p>
    </div>

  </div>

</section>



{/*  7. TESTIMONIALS */}
<section className="testimonial-section">
<div className="blue-spot blue-spot-1"></div>
<div className="blue-spot blue-spot-2"></div>

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
      <div className="audit-spot audit-spot-1"></div>
<div className="audit-spot audit-spot-2"></div>

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