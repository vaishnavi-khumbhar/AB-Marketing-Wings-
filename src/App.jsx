import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import OurWork from "./pages/OurWork/OurWork";
import Contact from "./pages/Contact/Contact";

import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; 
import AiChatButton from "./components/AiChatButton/AiChatButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* GLOBAL FLOATING BUTTONS */}
      <WhatsAppButton />
      <ScrollToTop /> 
      <AiChatButton />

      <Footer />
    </BrowserRouter>
  );
}

export default App;