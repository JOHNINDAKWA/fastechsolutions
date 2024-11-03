import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column footer-col-top" data-aos="fade-up">
            <h4 className="footer-title">Address</h4>
            <p>
              <FaMapMarkerAlt className="footer-icon" />
              Chokaa, off Kangundo Road &
              <br />
              Kantafu, kangundo Road,Nairobi.
            </p>
            <p>
              <FaPhoneAlt className="footer-icon" />
              0748764766 | 0716016706
            </p>
            <p>
              <FaEnvelope className="footer-icon" />
              fastech248@gmail.com
            </p>
            <div className="footer-social footer-col">
              <a className="btn btn-social" href="">
                <FaTwitter />
              </a>
              <a className="btn btn-social" href="">
                <FaFacebookF />
              </a>
              <a className="btn btn-social" href="">
                <FaInstagram />
              </a>
              <a className="btn btn-social" href="">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="footer-column footer-col social-link-s" data-aos="fade-up">
            <h4 className="footer-title">Quick Link</h4>
            <a className="btn btn-link" href="">
              Home
            </a>
            <a className="btn btn-link" href="">
              Our services
            </a>
            <a className="btn btn-link" href="">
              About us
            </a>
            <a className="btn btn-link" href="">
              Terms & Condition
            </a>
            <a className="btn btn-link" href="">
              Career
            </a>
          </div>
          <div className="footer-column footer-col popular-link" data-aos="fade-up">
            <h4 className="footer-title">Popular Link</h4>
            <Link className="btn btn-link" to="/about">
              About Us
            </Link>
            <Link className="btn btn-link" to="/contact">
              Contact Us
            </Link>
            <Link className="btn btn-link" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="btn btn-link" to="/terms-and-conditions">
              Terms & Conditions
            </Link>
            <Link className="btn btn-link" to="/career">
              Career
            </Link>
          </div>
          <div className="footer-column2" data-aos="fade-up">
            <img src={Logo} alt="logo" />
            <p>
              Fastech Solutions empowers businesses with high-speed internet,
              network support, CCTV, and cybersecurity solutions, ensuring
              connectivity, growth, and security.
            </p>
            <Link to="/contact">Try Us</Link>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-row">
          <div className="footer-col">
            &copy;{" "}
            <a className="footer-link" href="#">
              Fastech Solutions
            </a>
            , All Right Reserved. Designed By{" "}
            <a className="footer-link2" href="https://johhnindakwa.vercel.app">
              Jindakwa
            </a>
          </div>
          <div className="footer-col">
            <div className="footer-menu">
              <Link to="/">Home</Link>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FAQs</a>
            </div>
          </div>
        </div>
      </div>

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
