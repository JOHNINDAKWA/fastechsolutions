import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Landing.css'; // Styles for the Landing component

// Import your images for the slides
import image1 from "../../assets/images/aboutt.png"; // Image for Telecommunication Solutions
import image2 from "../../assets/images/about-home.jpg"; // Image for Cyber Security Solutions
import image3 from "../../assets/images/happy6.jpg"; // Image for Enterprise Solutions (and intro)
import image4 from "../../assets/images/web.png"; // Image for Web Development (ensure this file exists!)
import image5 from "../../assets/images/cctv.jpg"; // Image for Web Development (ensure this file exists!)



// Default set of service boxes for the intro slide
const defaultServiceBoxes = [
  { 
    number: "01", 
    title: "Strategic IT Consultation", 
    description: "We analyze your goals and craft tailored IT roadmaps for long-term success." 
  },
  { 
    number: "02", 
    title: "Secure System Design", 
    description: "We design user-friendly systems with strong architecture and security in mind." 
  },
  { 
    number: "03", 
    title: "Implementation & Deployment", 
    description: "We deliver and integrate reliable tech solutions, from networks to websites." 
  },
  { 
    number: "04", 
    title: "Monitoring & Support", 
    description: "We offer 24/7 system monitoring, support, and maintenance for smooth operations." 
  },
  { 
    number: "05", 
    title: "Cybersecurity Protection", 
    description: "We protect your data and systems with layered security and threat prevention." 
  },
  { 
    number: "06", 
    title: "Innovation & Future-Proofing", 
    description: "We adopt new tech to keep your business agile and ready for what’s next." 
  },
];


// Data for all the slides
const slides = [
  {
    // Intro slide as per the initial design image
    heading: "We are a fully integrated <span class='highlight-text'>digital</span> agency.",
    description: "", // No description for the intro slide
    image: image3, // Use a suitable background image for the intro
    isIntro: true, // Flag to identify the intro slide
    serviceBoxes: defaultServiceBoxes, // Show default service boxes for the intro
  },
  {
    // Enterprise Solutions slide
    title: "Enterprise Solutions",
    heading: "Robust Network & CCTV Infrastructure",
    description:
      "End-to-end network installation, monitoring, and security support for seamless enterprise operations.",
    image: image5, // Example image for Enterprise Solutions
    buttonText: "Learn More",
    buttonLink: "/enterprise",
    serviceBoxes: [
      { number: "01", title: "Network Design", description: "Designing scalable and secure network architectures." },
      { number: "02", title: "CCTV Installation", description: "Professional installation and integration of surveillance systems." },
      { number: "03", title: "Data Center Solutions", description: "Building and managing high-performance data centers." },
      { number: "04", title: "Server Management", description: "Optimizing server performance and ensuring uptime." },
      { number: "05", title: "VoIP Systems", description: "Implementing reliable Voice over IP communication solutions." },
      { number: "06", title: "Structured Cabling", description: "Organized and efficient cabling infrastructure for your business." },
    ],
  },
  {
    // Telecommunication Solutions slide
    title: "Telecommunication Solutions",
    heading: "Fiber-Backed Connectivity at Lightning Speed",
    description:
      "High-speed fiber internet and network resilience tailored for SMEs and business growth.",
    image: image1, // Example image for Telecom
    buttonText: "Learn More",
    buttonLink: "/telecom",
    serviceBoxes: [
      { number: "01", title: "Fiber Optic Installation", description: "High-speed and reliable fiber optic network deployment." },
      { number: "02", title: "Broadband Services", description: "Providing fast and consistent internet access." },
      { number: "03", title: "Wireless Solutions", description: "Setting up robust and secure wireless networks." },
      { number: "04", title: "IP Telephony", description: "Modern and efficient voice communication over IP networks." },
      { number: "05", title: "Network Optimization", description: "Ensuring peak performance of your telecom infrastructure." },
      { number: "06", title: "Managed Services", description: "Ongoing support and maintenance for your telecom systems." },
    ],
  },
  {
    // Cyber Security Solutions slide
    title: "Cyber Security Solutions",
    heading: "Secure. Defend. Thrive.",
    description:
      "Protect your business with next-gen firewalls, endpoint security, and intelligent threat prevention.",
    image: image2, // Example image for Cyber Security
    buttonText: "Learn More",
    buttonLink: "/cyber-security",
    serviceBoxes: [
      { number: "01", title: "Threat Detection", description: "Proactive identification of potential cyber threats." },
      { number: "02", title: "Endpoint Protection", description: "Securing all devices connected to your network." },
      { number: "03", title: "Firewall Management", description: "Configuring and maintaining robust firewall defenses." },
      { number: "04", title: "Security Audits", description: "Comprehensive assessment of your security vulnerabilities." },
      { number: "05", title: "Incident Response", description: "Rapid and effective response to security breaches." },
      { number: "06", title: "Security Training", description: "Educating your team on best cybersecurity practices." },
    ],
  },
  {
    // New Web Development slide
    title: "Web Development",
    heading: "Crafting Stunning & Functional Web Experiences",
    description:
      "From sleek designs to robust backend systems, we build dynamic and responsive websites tailored to your vision.",
    image: image4, // Image for web development
    buttonText: "Discover Web Solutions",
    buttonLink: "/web-development",
    serviceBoxes: [
      { number: "01", title: "Custom Web Design", description: "Unique and captivating designs tailored to your brand identity." },
      { number: "02", title: "Responsive Development", description: "Websites that look and perform great on any device." },
      { number: "03", title: "E-commerce Solutions", description: "Building secure and scalable online stores." },
      { number: "04", title: "Content Management Systems", description: "Easy-to-use platforms for managing your website content." },
      { number: "05", title: "Backend Development", description: "Robust server-side logic and database management." },
      { number: "06", title: "Website Maintenance", description: "Ongoing support and updates to keep your site running smoothly." },
    ],
  },
];

const Landing = () => {
  const [index, setIndex] = useState(0); // Current slide index
  const [direction, setDirection] = useState(0); // Direction for Framer Motion animation (1 for next, -1 for prev)

  // Framer Motion variants for the main content (heading, description, button)
  const contentVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? "100%" : "-100%", // Starts from right or left depending on direction
    }),
    animate: {
      opacity: 1,
      x: 0, // Moves to center
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 }, // Spring animation for X-axis
        opacity: { duration: 0.5 }, // Fade animation for opacity
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? "100%" : "-100%", // Exits to right or left depending on direction
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  // Framer Motion variants for the service boxes container
  const boxContainerVariants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction > 0 ? "50px" : "-50px", // Starts slightly below or above
    }),
    animate: {
      opacity: 1,
      y: 0, // Moves to final position
      transition: {
        y: { type: "spring", stiffness: 200, damping: 20 },
        opacity: { duration: 0.5 },
        staggerChildren: 0.1, // Staggers the animation of individual service boxes
      },
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction < 0 ? "50px" : "-50px",
      transition: {
        y: { type: "spring", stiffness: 200, damping: 20 },
        opacity: { duration: 0.5 },
        staggerChildren: 0.05, // Quicker stagger on exit
      },
    }),
  };

  // Framer Motion variant for individual service box items (used with staggerChildren)
  const itemVariants = {
    initial: { opacity: 0, y: 20 }, // Starts hidden and slightly below
    animate: { opacity: 1, y: 0 }, // Fades in and moves to position
    exit: { opacity: 0, y: 20 } // Fades out and moves down
  };

  // Handles moving to the next slide
  const nextSlide = () => {
    setDirection(1); // Set direction for "next" animation
    setIndex((prev) => (prev + 1) % slides.length); // Loop back to start if at end
  };

  // Handles moving to the previous slide
  const prevSlide = () => {
    setDirection(-1); // Set direction for "previous" animation
    setIndex((prev) => (prev - 1 + slides.length) % slides.length); // Loop back to end if at start
  };

  // Effect for automatic slide transitions
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Change slide every 10 seconds
    return () => clearInterval(interval); // Clear interval on component unmount or index change
  }, [index]); // Re-run effect when index changes (resets timer)

  const currentSlide = slides[index]; // Get the data for the current slide

  return (
    <section className="landing-hero" style={{ backgroundImage: `url(${currentSlide.image})` }}>
      {/* Overlay to darken the background image for text readability */}
      <div className="landing-overlay"></div>

      {/* Main content area with animation */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index + "main-content"} // Unique key for AnimatePresence to trigger re-render and animation
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          className="landing-content"
        >
          {/* Conditional rendering for the intro slide vs. other slides */}
          {currentSlide.isIntro ? (
            <>
              {/* Using dangerouslySetInnerHTML to render HTML from the heading string */}
              <h1 dangerouslySetInnerHTML={{ __html: currentSlide.heading }}></h1>
              <Link to="/contact" className="start-project-btn">
                Contact Us Today
              </Link>
            </>
          ) : (
            <>
              {currentSlide.title && <h4>{currentSlide.title}</h4>}
              <h1>{currentSlide.heading}</h1>
              <p>{currentSlide.description}</p>
              <Link to={currentSlide.buttonLink} className="start-project-btn">
                {currentSlide.buttonText}
              </Link>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Left Navigation Arrow */}
      <button onClick={prevSlide} className="nav-arrow left-arrow">
        <FaArrowLeft />
      </button>

      {/* Right Navigation Arrow */}
      <button onClick={nextSlide} className="nav-arrow right-arrow">
        <FaArrowRight />
      </button>

      {/* Progress Indicators (dots) at the bottom center */}
      <div className="progress-indicators-container">
        <div className="progress-indicators">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1); // Determine animation direction
                setIndex(i); // Change to clicked slide
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Service Boxes Section (also animated and slides with content) */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index + "service-boxes"} // Unique key to trigger animation for service boxes
          variants={boxContainerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          className="service-boxes-container"
        >
          {/* Map through the service boxes for the current slide */}
          {currentSlide.serviceBoxes.map((box, i) => (
            <motion.div key={i} className="service-box" variants={itemVariants}>
              <div className="box-number">{box.number}</div>
              <h3>{box.title}</h3>
              {/* Only render description if it exists */}
              {box.description && <p>{box.description}</p>}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Landing;