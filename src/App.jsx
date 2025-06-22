import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Telecom from './pages/Services/Telecom/Telecom';
import CyberSecurity from './pages/Services/CyberSecurity/CyberSecurity';
import Enterprise from './pages/Services/Enterprise/Enterprise';
import WebDevelopment from './pages/Services/WebDevelopment/WebDevelopment';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/telecom" element={<Telecom />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/web-development" element={<WebDevelopment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
