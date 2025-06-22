import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight, // Assuming you have FaArrowRight for CTA buttons
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5"; // For the checkmark icons in the CTA

import "./Footer.css";
import Logo from "../../assets/images/logo.png"; // Your company logo
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      {/* Top Call-to-Action Section (New Design Element - kept as is) */}
      <div className="footer-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Try Fastech Solutions today.</h2>
          <div className="cta-features">
            <span><IoCheckmarkCircleOutline /> Web Solutions</span>
            <span><IoCheckmarkCircleOutline /> Internet Solutions</span>
            <span><IoCheckmarkCircleOutline /> Security Solutions</span>
          </div>
        </div>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn primary-btn">
            Get a Quote <FaArrowRight />
          </Link>
          <Link to="/about" className="cta-btn secondary-btn">
            Learn More <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Main Footer Content - Blended with Original Information */}
      <div className="footer-container">
        <div className="footer-links-row"> {/* This row will contain your original columns */}
          {/* Column 1: Address (Original Content) */}
          <div className="footer-column footer-col-address" data-aos="fade-up">
            <h4 className="footer-title">Address</h4>
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              Chokaa, off Kangundo Road &<br />
              Kantafu, kangundo Road,Nairobi.
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" />
              0748764766 | 0716016706
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              sales@fastechinternet.co.ke
            </p>
            <div className="footer-social-links"> {/* New container for social icons */}
              <a className="social-icon-btn" href="">
                <FaTwitter />
              </a>
              <a className="social-icon-btn" href="">
                <FaFacebookF />
              </a>
              <a className="social-icon-btn" href="">
                <FaInstagram />
              </a>
              <a className="social-icon-btn" href="">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Link (Original Content) */}
          <div className="footer-column" data-aos="fade-up">
            <h4 className="footer-title">Quick Link</h4>
            <Link className="footer-link-item" to="/">Home</Link>
            <Link className="footer-link-item" to="/services">Our services</Link> {/* Assuming this goes to a services page */}
            <Link className="footer-link-item" to="/about">About us</Link>
            <Link className="footer-link-item" to="/terms-and-conditions">Terms & Condition</Link>
            <Link className="footer-link-item" to="/career">Career</Link>
          </div>

          {/* Column 3: Popular Link (Original Content) */}
          <div className="footer-column" data-aos="fade-up">
            <h4 className="footer-title">Popular Link</h4>
            <Link className="footer-link-item" to="/about">About Us</Link>
            <Link className="footer-link-item" to="/contact">Contact Us</Link>
            <Link className="footer-link-item" to="/privacy-policy">Privacy Policy</Link>
            <Link className="footer-link-item" to="/terms-and-conditions">Terms & Conditions</Link>
            <Link className="footer-link-item" to="/career">Career</Link>
          </div>

          {/* Column 4: Fastech Logo & Description (Original Content with new styling cues) */}
          <div className="footer-column footer-fastech-info" data-aos="fade-up">
            <img src={Logo} alt="Fastech Solutions Logo" className="footer-fastech-logo" />
            <p>
              Fastech Solutions empowers businesses with high-speed internet,
              network support, CCTV, and cybersecurity solutions, ensuring
              connectivity, growth, and security.
            </p>
            <Link to="/contact" className="fastech-try-us-btn">Try Us</Link>
          </div>
        </div>
      </div>

      {/* Copyright and Bottom Links */}
      <div className="footer-copyright">
        <div className="footer-row copyright-row">
          <div className="footer-col copyright-text">
            &copy; {new Date().getFullYear()}{" "}
            <a className="footer-link" href="#">
              Fastech Solutions
            </a>
            , All Right Reserved. 
          </div>
          <div className="footer-col bottom-menu">
            <Link to="/">Home</Link>
            <a href="">Cookies</a>
            <a href="">Help</a>
            <a href="">FAQs</a>
            {/* Removed "ALL SYSTEMS OPERATIONAL" as it was from the example image, not your original content */}
          </div>
        </div>
      </div>

      {/* WhatsApp Button and Back to Top (kept from your original) */}
      <a
        href="https://wa.me/+254748764766"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <div className="back-to-top" onClick={scrollToTop}>
        <MdOutlineKeyboardDoubleArrowUp />
      </div>
    </div>
  );
};

export default Footer;