import "./Enterprise.css";
import { Link } from "react-router-dom";
import Enterprise1 from "../../../assets/images/enterprise1.png";
import Enterprise2 from "../../../assets/images/enterprise2.png";
import bitdefenderImage from "../../../assets/images/about3.jpg";
import { IoCheckmarkDone } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Testimonial1 from "../../../assets/images/testimonial-1.jpg";
import Testimonial2 from "../../../assets/images/testimonial.jpg";

const Enterprise = () => {
  return (
    <div className="services">
      <div className="service-banner">
        <div className="service-banner-container" data-aos="fade-left">
          <h1>Our Services</h1>
          <div className="service-banner-links">
            <Link to={"/"}>Home</Link>
            <div className="service-separator"></div>
            <Link to={"/"}>Pages</Link>
            <div className="service-separator"></div>
            <Link to={"/enterprise"} className="active">
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </div>

      <div className="enterprise-section">
        <h2 data-aos="fade-left">Enterprise Solutions and Network Support</h2>
        <p className="enterprise-info" data-aos="fade-left">
          In today’s fast-paced business environment, reliable network support
          and security solutions are critical. Our Enterprise Solutions
          encompass outsourced network support, CCTV installation, and
          comprehensive infrastructure setup to help your organization operate
          seamlessly and securely.
        </p>

        <div className="enterprise-services">
          <div className="enterprise-service-item">
            <img
              src={Enterprise1}
              alt="Network Support"
              data-aos="fade-right"
            />
            <div className="service-content" data-aos="fade-left">
              <h4>Network Support</h4>
              <p>
                Our team provides end-to-end network support, ensuring your
                business runs smoothly with minimal downtime. We manage and
                troubleshoot network issues proactively, giving you peace of
                mind.
              </p>
            </div>
          </div>

          <div className="enterprise-service-item item-2">
            <div className="service-content" data-aos="fade-left">
              <h4>CCTV Installation and Maintenance</h4>
              <p>
                We offer expert CCTV installation and maintenance services to
                enhance your business security. Our team ensures that all
                systems are set up for optimal monitoring and maintained for
                uninterrupted protection.
              </p>
            </div>
            <img src={Enterprise2} alt="CCTV Security" data-aos="fade-right" />
          </div>

          <div className="enterprise-service-item">
            <img
              src={bitdefenderImage}
              alt="Infrastructure Solutions"
              data-aos="fade-right"
            />
            <div className="service-content" data-aos="fade-left">
              <h4>Infrastructure Solutions</h4>
              <p>
                From planning to implementation, we provide customized
                infrastructure solutions tailored to your business requirements.
                Our services cover everything from structured cabling to server
                setup, ensuring your infrastructure supports seamless
                operations.
              </p>
            </div>
          </div>


        </div>
      </div>

      <div className="testimonial">
        <div className="testimonial-container">
          <div className="testimonial-left" data-aos="fade-right">
            <h3>Testimonial</h3>
            <h2>What Our Clients Say</h2>
            <p>
              Here’s what our clients say about our reliable network support and
              enterprise solutions, and how our services have helped enhance
              their operations.
            </p>
            <Link to={"/contact"}>Contact Us Today</Link>
          </div>

          <div className="testimonial-right">
            <div className="testimonial-item" data-aos="fade-left">
              <div className="top-card">
                <img src={Testimonial2} alt="Client Testimonial" />
                <div className="card-test-left">
                  <h3>Fina Maelo&apos;</h3>
                  <p>Network Engineer</p>
                  <div className="stars">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                </div>
              </div>
              <div className="bottom-card">
                <p>
                  The team at Fastech Solutions helped set up our network
                  infrastructure, ensuring it runs seamlessly. Their support is
                  always on point, and their expertise really shows.
                </p>
              </div>
            </div>

            <div className="testimonial-item" data-aos="fade-left">
              <div className="top-card">
                <img src={Testimonial1} alt="Client Testimonial" />
                <div className="card-test-left">
                  <h3>Sarah Njoki</h3>
                  <p>IT Manager</p>
                  <div className="stars">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                </div>
              </div>
              <div className="bottom-card">
                <p>
                  The CCTV installation service was efficient, and their team is
                  incredibly responsive. We feel more secure knowing we’re
                  covered by such reliable professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="enterprise-section-2" data-aos="zoom-in">
        <h3>Why Choose Our Enterprise Solutions?</h3>
        <ul>
          <li>
            <IoCheckmarkDone className="enterprise-link" />
            Expert assessment and tailored network solutions.
          </li>
          <li>
            <IoCheckmarkDone className="enterprise-link" />
            Proactive 24/7 support for network uptime.
          </li>
          <li>
            <IoCheckmarkDone className="enterprise-link" />
            Security-focused CCTV installations and maintenance.
          </li>
          <li>
            <IoCheckmarkDone className="enterprise-link" />
            Full infrastructure setup for all business needs.
          </li>
          <li>
            <IoCheckmarkDone className="enterprise-link" />
            Continuous support and updates for smooth operations.
          </li>
        </ul>

        <h3>The Importance of Reliable Enterprise Solutions</h3>
        <p>
          With the increasing complexity of network demands, having a reliable
          support system in place is critical for business success. Our experts
          are dedicated to providing top-notch solutions that help enhance your
          infrastructure, ensuring seamless operations and security for your
          assets.
        </p>

        <h3>Get in Touch</h3>
        <p>
          Interested in learning more about our Enterprise Solutions? Contact us
          today to discuss how we can help optimize your network and security
          infrastructure. Our team is ready to provide insights and solutions to
          ensure your business continuity.
        </p>
      </div>
    </div>
  );
};

export default Enterprise;
