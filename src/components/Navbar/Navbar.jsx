import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGlobeEurope,
  FaPhone,
  FaBars,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="header-top">
      <div className="header-container">
        <div className="brand-container">
          <Link to="/" className="brand-link">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="header-content">
          <div className="topbar">
            <div className="location-email">
              <div className="location">
                <a href="#" className="location-link">
                  <FaPhone className="icon-phone" /> 0748764766 | 0716016706
                </a>
              </div>
              <div className="separator"></div>
              <div className="email">
                <a href="mailto:example@gmail.com" className="email-link">
                  <FaEnvelope className="icon-envelope" /> fastech248@gmail.com
                </a>
              </div>
            </div>
            <div className="social-language">
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61550241804576" className="social-link">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
              </div>
              <div className="language-dropdown">
                <a href="#" className="language-toggle" data-toggle="dropdown">
                  <small className="language">
                    <FaGlobeEurope className="icon-globe" />
                    <span className="english">English</span>
                  </small>
                </a>
              </div>
            </div>
          </div>
          <div className="nav-bar">
            <nav className="navbar">
              <div className="menu">
                <Link to="/" className="menu-item active">
                  Home
                </Link>
                <Link to="/about" className="menu-item">
                  About
                </Link>
                <div className="menu-dropdown">
                  <Link to="#" className="dropdown-toggle">
                    Services 
                    <FaCaretDown className="dropdown-btn"/>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/enterprise" className="dropdown-item">
                      Enterprise
                    </Link>
                    <Link to="/telecom" className="dropdown-item">
                      Telco
                    </Link>
                    <Link to="/cyber-security" className="dropdown-item">
                      Cyber Security
                    </Link>

                  </div>
                </div>
                <Link to="/contact" className="menu-item">
                  Contact
                </Link>
              </div>
            </nav>

            <div className="nav-buttons">
              <Link to="/contact" className="btn-get-solution">
                Get a Quote
              </Link>
            </div>


          </div>
        </div>



      {/* Toggle Buttons */}
      <div className="toggle-buttons" onClick={toggleMenu}>
        {menuOpen ? (
          <div className="close-toggle">
            <IoMdClose />
          </div>
        ) : (
          <div className="open-toggle">
            <FaBars />
          </div>
        )}
      </div>

   
      {menuOpen && (
        <div className="Mobile-Nav">
          <Link to="/" className="mobile-menu-item active" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="mobile-menu-item" onClick={toggleMenu}>
            About
          </Link>

         
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-toggle" onClick={toggleDropdown}>
              Services <FaCaretDown className="mobile-dropdown-btn" />
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu-mobile">
                <Link to="/enterprise" className="mobile-dropdown-item" onClick={toggleMenu}>
                  Enterprise Solutions
                </Link>
                <Link to="/telecom" className="mobile-dropdown-item" onClick={toggleMenu}>
                  Telecommunication Solutions
                </Link>
                <Link to="/cyber-security" className="mobile-dropdown-item" onClick={toggleMenu}>
                  Cyber Security Solutions
                </Link>

              </div>
            )}
          </div>

          <Link to="/contact" className="mobile-menu-item" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
  



      </div>
    </div>
  );
};

export default Navbar;
