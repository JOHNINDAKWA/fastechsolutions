import "./Services.css";
import { SiAdobeacrobatreader } from "react-icons/si";
import { SiAccusoft } from "react-icons/si";
import { SiAffine } from "react-icons/si";

const Services = () => {
  return (
    <div className="service">
      <h2 data-aos="zoom-in">Our Services</h2>
      <h4 data-aos="zoom-in">The best Services for our Customers.</h4>
      <p data-aos="zoom-in">
        At Fastech Solutions, we offer a range of customized services designed
        to support and empower businesses. From enterprise-level IT solutions to
        advanced cyber security measures and telecommunication support, our team
        is dedicated to providing innovative solutions that enhance
        connectivity, security, and operational efficiency.
      </p>

      <div className="service-items">
        <div className="service-item" data-aos="fade-right">
          <span>
            {" "}
            <SiAffine className="service-icon" />
          </span>
          <h3>Service</h3>
          <h2>Enterprise Solutions</h2>
          <p>
            Within our comprehensive range of enterprise solutions, we provide
            specialized services to meet the unique IT needs of businesses. Our
            focus on outsourced IT support, managed IT services, managed
            security, and cabling solutions allows us to cater to the diverse
            requirements of our clients.
          </p>
          <a href="/enterprise">Discover More</a>
        </div>
        <div className="service-item service-item-active" data-aos="zoom-in">
          <span>
            <SiAccusoft className="service-icon" />
          </span>
          <h3>Service</h3>
          <h2>Cyber Security Solutions</h2>
          <p>
            In today’s digital landscape, safeguarding your business from cyber
            threats is more crucial than ever. Our comprehensive Cyber Security
            services are designed to protect your valuable assets, ensuring your
            organization operates securely and efficiently.
          </p>
          <a href="/cyber-security">Discover More</a>
        </div>
        <div className="service-item" data-aos="fade-left">
          <span>
            <SiAdobeacrobatreader className="service-icon" />
          </span>
          <h3>Service</h3>
          <h2>Telecommunication Solutions</h2>
          <p>
            In the rapidly evolving telecommunications industry, we provide
            cutting-edge solutions to help you stay ahead of the competition.
            Whether you need assistance with network design and optimization,
            Turnkey installations.
          </p>
          <a href="/telecom">Discover More</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
