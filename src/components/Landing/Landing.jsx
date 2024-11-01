import { useState, useEffect } from "react";
import "./Landing.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/images/header-1.jpg";
import image2 from "../../assets/images/about-home.jpg";
import image3 from "../../assets/images/about2.png";
import { Link } from "react-router-dom";

const imagesAndContent = [
  {
    image: image1,
    title: "Telecommunication Solutions",
    heading: "Fiber Internet Provision for Reliable Connectivity",
    description:
      "Offering high-speed fiber internet, robust support for SMEs, and tailored network solutions to meet diverse business needs.",
  },
  {
    image: image3,
    title: "Enterprise Solutions",
    heading: "Comprehensive Network Support and CCTV Services",
    description:
      "Providing outsourced network support, CCTV installation and maintenance, and end-to-end network infrastructure for seamless operations.",
  },
  {
    image: image2,
    title: "Cyber Security Solutions",
    heading: "Protect Your Business with Advanced Security Services",
    description:
      "Defending against cyber threats with solutions like firewalls, Sophos, and Bitdefender for comprehensive security.",
  },
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndContent.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + imagesAndContent.length) % imagesAndContent.length
    );
  };

  // useEffect to handle automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="home-container">
      {currentIndex !== 1 && <div className="hero-shape-1"></div>}
      {currentIndex === 1 && <div className="hero-shape-2"></div>}

      <div className="left-image" />
          <div
            className="right-image"
            style={{
              backgroundImage: `url(${imagesAndContent[currentIndex].image})`,
            }}
          />
          <div className="content">
            <h4 data-aos="fade-right">{imagesAndContent[currentIndex].title}</h4>
            <h1 data-aos="fade-left">{imagesAndContent[currentIndex].heading}</h1>
            <p  className="mb-5 fs-5">
              {imagesAndContent[currentIndex].description}
            </p>
            <div className="home-btn" >
              <Link to="/about" className="btn-about" >
                Learn More
              </Link>
              <Link to="/contact" className="btn-contact" >
                Contact Us
              </Link>
            </div>
          </div>
      <div className="navigation-buttons">
        <a className="nav-button" onClick={prevSlide} data-aos="fade-right">
          <FaArrowLeft />
        </a>
        <a className="nav-button" onClick={nextSlide} data-aos="fade-left">
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Landing;
