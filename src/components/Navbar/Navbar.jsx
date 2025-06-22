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
  FaBuilding, 
  FaWifi,
  FaShieldAlt,
  FaCode, 
  FaCaretDown,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/images/logo.png";
import servicesMegaMenuImage from "../../assets/images/web.png";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);

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
                <a href="sales@fastechinternet.co.ke" className="email-link">
                  <FaEnvelope className="icon-envelope" /> sales@fastechinternet.co.ke
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

                {/* Services Mega Dropdown */}
                <div className="menu-dropdown" onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
                  <Link to="#" className="dropdown-toggle">
                    Services <FaCaretDown className="dropdown-btn" />
                  </Link>
                  {servicesDropdownOpen && (
                    <div className="services-mega-menu">
                     
                      <div className="services-mega-menu-grid"> {/* Renamed class to reflect grid/row layout */}
                        <Link to="/enterprise" className="services-mega-menu-item">
                          <FaBuilding className="mega-menu-item-icon" />
                          <div className="item-text">
                            <h4>Enterprise Solutions</h4>
                            <p>Robust systems for business growth.</p>
                          </div>
                        </Link>
                        <Link to="/telecom" className="services-mega-menu-item">
                          <FaWifi className="mega-menu-item-icon" />
                          <div className="item-text">
                            <h4>Telecommunication Solutions</h4>
                            <p>Seamless communication infrastructure.</p>
                          </div>
                        </Link>
                        <Link to="/cyber-security" className="services-mega-menu-item">
                          <FaShieldAlt className="mega-menu-item-icon" />
                          <div className="item-text">
                            <h4>Cyber Security Solutions</h4>
                            <p>Protecting your digital assets.</p>
                          </div>
                        </Link>
                        <Link to="/web-development" className="services-mega-menu-item">
                          <FaCode className="mega-menu-item-icon" />
                          <div className="item-text">
                            <h4>Web Development</h4>
                            <p>Custom websites and web applications.</p>
                          </div>
                        </Link>
                      </div>
                       <div className="services-mega-menu-image-container">
                        <img src={servicesMegaMenuImage} alt="Our Services" className="services-mega-menu-image" />
                      </div>
                    </div>
                  )}
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
              <div className="mobile-dropdown-toggle" onClick={toggleServicesDropdown}>
                Services <FaCaretDown className="mobile-dropdown-btn" />
              </div>
              {servicesDropdownOpen && (
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
                  <Link to="/web-development" className="mobile-dropdown-item" onClick={toggleMenu}>
                    Web Development
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