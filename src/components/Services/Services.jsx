import { Link } from "react-router-dom";
// Import suitable icons from react-icons
import {
  FaServer,          
  FaShieldAlt,       
  FaSatelliteDish,     
  FaCode,             
  FaArrowRight,        
} from "react-icons/fa";


import "./Services.css"; 

const servicesData = [
  {
    icon: FaServer,
    h3: "Solution Area", // Small category text above main title
    title: "Enterprise Solutions",
    description: `Within our comprehensive range of enterprise solutions, we provide
                  specialized services to meet the unique IT needs of businesses. Our
                  focus on outsourced IT support, managed IT services, managed
                  security, and cabling solutions allows us to cater to the diverse
                  requirements of our clients.`,
    link: "/enterprise",
  },
  {
    icon: FaShieldAlt,
    h3: "Solution Area",
    title: "Cyber Security Solutions",
    description: `In today’s digital landscape, safeguarding your business from cyber
                  threats is more crucial than ever. Our comprehensive Cyber Security
                  services are designed to protect your valuable assets, ensuring your
                  organization operates securely and efficiently.`,
    link: "/cyber-security",
  },
  {
    icon: FaSatelliteDish,
    h3: "Solution Area",
    title: "Telecommunication Solutions",
    description: `In the rapidly evolving telecommunications industry, we provide
                  cutting-edge solutions to help you stay ahead of the competition.
                  Whether you need assistance with network design and optimization,
                  Turnkey installations.`,
    link: "/telecom",
  },
  {
    icon: FaCode, // New icon for web development
    h3: "Solution Area",
    title: "Web Development Solutions", // New service title
    description: `From sleek designs and intuitive user interfaces to robust backend
                  systems and e-commerce platforms, we build dynamic and responsive
                  websites tailored to your unique business needs and vision.`,
    link: "/web-development", // New link for web development
  },
];

const Services = () => {
  return (
    <div className="services-section"> {/* Changed class from 'service' to 'services-section' for clarity */}
      {/* Section Header */}
      <div className="services-header">
        <h2 data-aos="zoom-in">Our Services</h2>
        <h4 data-aos="zoom-in">The best Services for our Customers.</h4>
        <p data-aos="zoom-in">
          At Fastech Solutions, we offer a range of customized services designed
          to support and empower businesses. From enterprise-level IT solutions to
          advanced cyber security measures and telecommunication support, our team
          is dedicated to providing innovative solutions that enhance
          connectivity, security, and operational efficiency.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="services-grid">
        {servicesData.map((service, index) => {
          // Determine if the card should have the colored background or white
          const isColoredBackground = index % 2 === 0; // 0, 2, 4... will be colored

          return (
            <div
              key={index} // Unique key for each service item
              className={`service-card ${isColoredBackground ? 'card-colored' : 'card-white'}`}
            >
              <div className="service-card-icon">
                {/* Render the React Icon component */}
                <service.icon />
              </div>
              <h3 className="service-card-h3">{service.h3}</h3> {/* Small text */}
              <h2 className="service-card-title">{service.title}</h2> {/* Main title */}
              <p className="service-card-description">{service.description}</p>
              <Link to={service.link} className="service-card-link">
                Discover More <FaArrowRight className="link-arrow" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;