import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    eyebrow: "Digital Growth Partner",
    title: ["Turn Attention Into ", "Customers", ""],
    accentIdx: 1,
    desc: "We blend creative storytelling, performance marketing, and data-driven strategies to help brands scale faster, smarter, and stronger.",
    btn1: "Book Free Consultation",
    btn2: "Our Expertise",
    btn1Route: "/contact",
    btn2Route: "/services",
    icon: "ti-chart-line",
    chips: [
      { val: "500+", lbl: "Leads Generated", pos: 0 },
      { val: "4X ROI", lbl: "Business Growth", pos: 1 },
      { val: "100+", lbl: "Brands Empowered", pos: 2 },
    ],
    theme: {
      bg: "linear-gradient(135deg,#1c0a00 0%,#431407 100%)",
      blob1: "#f97316",
      blob2: "#fb923c",
      accent: "#f97316",
      accentLight: "#fb923c",
      eyebrow: "#fed7aa",
      desc: "#ffedd5",
      icon: "#fb923c",
      glow: "rgba(249,115,22,0.3)",
      iconBg: "rgba(249,115,22,0.15)",
      chips: [
        "rgba(249,115,22,0.75)",
        "rgba(28,10,0,0.9)",
        "rgba(249,115,22,0.6)"
      ],
      bar: "#f97316",
    },
  },

  {
    eyebrow: "Brand Strategy",
    title: ["Build Brands That ", "Inspire", " & Lead"],
    accentIdx: 1,
    desc: "From visual identity to brand communication, we create memorable brands that connect emotionally and stand out in crowded markets.",
    btn1: "Explore Branding",
    btn2: "View Our Work",
    btn1Route: "/contact",
    btn2Route: "/services",
    icon: "ti-crown",
    chips: [
      { val: "50+", lbl: "Brands Transformed", pos: 0 },
      { val: "98%", lbl: "Client Satisfaction", pos: 1 },
      { val: "3X", lbl: "Brand Recall", pos: 2 },
    ],
    theme: {
      bg: "linear-gradient(135deg,#0f172a 0%,#1e1b4b 100%)",
      blob1: "#4f46e5",
      blob2: "#818cf8",
      accent: "#6366f1",
      accentLight: "#818cf8",
      eyebrow: "#a5b4fc",
      desc: "#e0e7ff",
      icon: "#818cf8",
      glow: "rgba(99,102,241,0.3)",
      iconBg: "rgba(99,102,241,0.15)",
      chips: [
        "rgba(99,102,241,0.75)",
        "rgba(49,46,129,0.9)",
        "rgba(99,102,241,0.6)"
      ],
      bar: "#6366f1",
    },
  },

  {
    eyebrow: "Performance Advertising",
    title: ["Maximize ", "ROI", " With Smart Ads"],
    accentIdx: 1,
    desc: "Google, Meta & Instagram campaigns designed to generate high-quality leads and measurable business growth.",
    btn1: "Start Growing Today",
    btn2: "View Case Studies",
    btn1Route: "/contact",
    btn2Route: "/services",
    icon: "ti-target-arrow",
    chips: [
      { val: "₹10Cr+", lbl: "Ad Spend Managed", pos: 0 },
      { val: "40%", lbl: "Lower CPL", pos: 1 },
      { val: "4.8★", lbl: "Client Rating", pos: 2 },
    ],
    theme: {
       bg: "linear-gradient(135deg,#1c0a00 0%,#431407 100%)",
      blob1: "#f97316",
      blob2: "#fb923c",
      accent: "#f97316",
      accentLight: "#fb923c",
      eyebrow: "#fed7aa",
      desc: "#ffedd5",
      icon: "#fb923c",
      glow: "rgba(249,115,22,0.3)",
      iconBg: "rgba(249,115,22,0.15)",
      chips: [
        "rgba(249,115,22,0.75)",
        "rgba(28,10,0,0.9)",
        "rgba(249,115,22,0.6)"
      ],
      bar: "#f97316",
    },
  },
];

const LABELS = ["Leads", "Brand", "Ads"];

const chipPositions = [
  { top: "-14px", right: "-34px", bottom: "auto", left: "auto" },
  { top: "auto", right: "-44px", bottom: "36px", left: "auto" },
  { top: "auto", right: "auto", bottom: "-14px", left: "-24px" },
];

const floatKeyframes = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap');
  @keyframes flt0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes flt1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes flt2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
  .hero-btn-p:hover { transform:translateY(-2px) !important; filter:brightness(1.12) !important; }
  .hero-btn-g:hover { border-color:rgba(255,255,255,0.5) !important; color:#fff !important; background:rgba(255,255,255,0.06) !important; }
  .hero-arr-ghost:hover { background:rgba(255,255,255,0.1) !important; color:#fff !important; }
  .hero-arr-fill:hover  { transform:scale(1.08) !important; filter:brightness(1.12) !important; }
  .hero-num:hover { opacity:0.65 !important; }
  @media(max-width:768px){
    .hero-inner { flex-direction:column !important; padding:40px 24px 90px !important; min-height:640px !important; justify-content:center !important; }
    .hero-col-l { width:100% !important; padding-right:0 !important; align-items:center !important; text-align:center !important; }
    .hero-col-r { width:100% !important; margin-top:32px; }
    .hero-h1    { font-size:30px !important; }
    .hero-desc  { max-width:100% !important; }
    .hero-btns  { justify-content:center; }
  }
`;

export default function Hero() {
  const navigate = useNavigate();
  const [cur, setCur] = useState(0);
  const [progress, setProgress] = useState(0);
  const progRef = useRef(null);
  const progVal = useRef(0);

  const goTo = (n) => {
    if (n === cur) return;
    setCur(n);
  };

  useEffect(() => {
    clearInterval(progRef.current);
    progVal.current = 0;
    setProgress(0);
    progRef.current = setInterval(() => {
      progVal.current += 0.4;
      setProgress(progVal.current);
      if (progVal.current >= 100) {
        clearInterval(progRef.current);
        setCur((p) => (p + 1) % slides.length);
      }
    }, 20);
    return () => clearInterval(progRef.current);
  }, [cur]);

  const t = slides[cur].theme;

  return (
    <section style={{ width: "100%", minHeight: 600, position: "relative", overflow: "hidden", background: t.bg, transition: "background 0.7s", fontFamily: "'Inter', sans-serif" }}>
      <style>{floatKeyframes}</style>

      {/* Blobs */}
      <div style={{ position: "absolute", width: 420, height: 420, top: -120, left: -80, borderRadius: "50%", background: t.blob1, filter: "blur(80px)", opacity: 0.2, transition: "background 0.7s", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", width: 220, height: 220, bottom: 20, left: 260, borderRadius: "50%", background: t.blob2, filter: "blur(80px)", opacity: 0.13, transition: "background 0.7s", pointerEvents: "none", zIndex: 0 }} />

      {/* Track */}
      <div style={{ display: "flex", transition: "transform 0.75s cubic-bezier(0.77,0,0.18,1)", transform: `translateX(-${cur * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className="hero-inner" style={{ minWidth: "100%", minHeight: 520, display: "flex", alignItems: "center", padding: "0 62px", position: "relative", zIndex: 2 }}>

            {/* Left */}
            <div className="hero-col-l" style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 24 }}>
              <div style={{ fontSize: 15.5, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16, color: s.theme.eyebrow }}>
                {s.eyebrow}
              </div>
              <h1 className="hero-h1" style={{ fontSize: 60, fontWeight: 900, color: "#fff", lineHeight: 1.08, marginBottom: 14 }}>
                {s.title.map((part, pi) =>
                  pi === s.accentIdx
                    ? <em key={pi} style={{ fontStyle: "normal", color: s.theme.accentLight }}>{part}</em>
                    : <span key={pi}>{part}</span>
                )}
              </h1>
              <p className="hero-desc" style={{ fontSize: 19.5, lineHeight: 1.8, marginBottom: 28, maxWidth: 800, color: s.theme.desc, opacity: 0.8 }}>
                {s.desc}
              </p>


              <div className="hero-btns" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button className="hero-btn-p" onClick={() => navigate(s.btn1Route)}
                  style={{ padding: "14px 24px", borderRadius: 8, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", color: "#fff", background: s.theme.accent, transition: "transform 0.2s,filter 0.2s", fontFamily: "inherit" }}>
                  {s.btn1}
                </button>
                <button className="hero-btn-g" onClick={() => navigate(s.btn2Route)}
                  style={{ padding: "12px 20px", borderRadius: 8, fontSize: 15, fontWeight: 800, background: "transparent", border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}>
                  {s.btn2}
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="hero-col-r" style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 230, height: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: s.theme.iconBg, boxShadow: `0 0 90px ${s.theme.glow}` }} />
                <i className={`ti ${s.icon}`} style={{ fontSize: 150, color: s.theme.icon, position: "relative", zIndex: 2 }} />
                {s.chips.map((chip, ci) => (
                  <div key={ci} style={{
                    position: "absolute",
                    ...chipPositions[chip.pos],
                    borderRadius: 12, padding: "8px 14px",
                    background: s.theme.chips[ci],
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)", zIndex: 4,
                    animation: `flt${ci} ${3 + ci * 0.4}s ease-in-out ${ci * 0.5}s infinite`,
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>{chip.val}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", fontWeight: 600, marginTop: 2 }}>{chip.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "flex-end", padding: "0 52px 22px", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {LABELS.map((lbl, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.15)" }} />}
              <div className="hero-num" onClick={() => goTo(i)}
                style={{ textAlign: "center", cursor: "pointer", opacity: cur === i ? 1 : 0.3, transition: "opacity 0.35s", padding: "0 4px", userSelect: "none" }}>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1 }}>0{i + 1}</div>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1.5, marginTop: 3 }}>{lbl}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button className="hero-arr-ghost" onClick={() => goTo((cur + slides.length - 1) % slides.length)} aria-label="Prev"
            style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", background: "transparent", border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)", transition: "all 0.2s" }}>
            <i className="ti ti-arrow-left" />
          </button>
          <button className="hero-arr-fill" onClick={() => goTo((cur + 1) % slides.length)} aria-label="Next"
            style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", background: t.accent, border: `1.5px solid ${t.accent}`, color: "#fff", transition: "transform 0.2s,filter 0.2s,background 0.6s,border-color 0.6s" }}>
            <i className="ti ti-arrow-right" />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(255,255,255,0.07)", zIndex: 20 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: t.bar, transition: "background 0.6s" }} />
      </div>
    </section>
  );
}

