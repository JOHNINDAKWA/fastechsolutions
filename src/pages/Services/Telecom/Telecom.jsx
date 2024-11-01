import './Telecom.css'
import { Link } from "react-router-dom";
import Enterprise1 from "../../../assets/images/enterprise1.png";
import Enterprise2 from "../../../assets/images/enterprise2.png";
import bitdefenderImage from "../../../assets/images/about3.jpg";
import { IoCheckmarkDone } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Testimonial1 from "../../../assets/images/testimonial-1.jpg";
import Testimonial2 from "../../../assets/images/testimonial.jpg";


const Telecom = () => {
  return (
    <div>
      <div className="service-banner">
        <div className="service-banner-container" data-aos="zoom-in">
          <h1>Our Services</h1>
          <div className="service-banner-links">
            <Link to={"/"}>Home</Link>
            <div className="service-separator"></div>
            <Link to={"/"}>Pages</Link>
            <div className="service-separator"></div>
            <Link to={"/enterprise"} className="active">
            Telecommunication Solutions
            </Link>
          </div>
        </div>
      </div>

      <div className="telecom-section">
        <h2 data-aos="zoom-in">Telecommunication Solutions</h2>
        <p className="telecom-info" data-aos="zoom-in">
        We provide fiber internet provision for reliable connectivity, offering high-speed fiber internet, robust support for SMEs, and tailored network solutions to meet diverse business needs.
        </p>

        <div className="telecom-services">
          <div className="telecom-service-item">
            <img src={Enterprise1} alt="Network Support" data-aos="fade-right"/>
            <div className="service-content" data-aos="fade-left">
              <h4>Fiber Internet Provision</h4>
              <p>
                Experience high-speed fiber internet designed to meet the demands of modern businesses. Our solutions ensure reliable connectivity that supports your operations.
              </p>
            </div>
          </div>

          <div className="telecom-service-item item-2">
            <div className="service-content" data-aos="fade-left">
              <h4>Robust Support for SMEs</h4>
              <p>
                We provide tailored support to small and medium enterprises, ensuring you have the resources and assistance needed to thrive in a competitive market.
              </p>
            </div>
            <img src={Enterprise2} alt="CCTV Security" data-aos="fade-right"/>
          </div>

          <div className="telecom-service-item">
            <img src={bitdefenderImage} alt="Infrastructure Solutions" data-aos="fade-right"/>
            <div className="service-content" data-aos="fade-left">
            <h4>Tailored Network Solutions</h4>
              <p>
                Our network solutions are customized to fit your unique business needs, providing flexibility and scalability to support your growth.
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
                  <h3>Javan Patel</h3>
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
                  The team at Fastech Solutions helped set up our network infrastructure, 
                  ensuring it runs seamlessly. Their support is always on point, 
                  and their expertise really shows.
                </p>
              </div>
            </div>

            <div className="testimonial-item" data-aos="fade-left">
              <div className="top-card">
                <img src={Testimonial1} alt="Client Testimonial" />
                <div className="card-test-left">
                  <h3>Wilkister Kinga</h3>
                  <p>HR, CO-OP BANK</p>
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
                  incredibly responsive. We feel more secure knowing we’re covered 
                  by such reliable professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="telecom-section-2" data-aos="zoom-in">
        <h3>High-speed internet for seamless connectivity.</h3>
        <ul>
          <li>
            <IoCheckmarkDone className="telecom-link" />
            Dedicated support for small and medium enterprises.
          </li>
          <li>
            <IoCheckmarkDone className="telecom-link" />
            Customized network solutions to fit your business needs.
          </li>
          <li>
            <IoCheckmarkDone className="telecom-link" />
            Scalable options for future growth.
          </li>
          <li>
            <IoCheckmarkDone className="telecom-link" />
            Full infrastructure setup for all business needs.
          </li>
          <li>
            <IoCheckmarkDone className="telecom-link" />
            Reliable infrastructure for optimal performance.
          </li>
        </ul>

        <h3>The Importance of Reliable Enterprise Solutions</h3>
        <p>
          With the increasing complexity of network demands, having a reliable support 
          system in place is critical for business success. Our experts are dedicated to 
          providing top-notch solutions that help enhance your infrastructure, ensuring 
          seamless operations and security for your assets.
        </p>

        <h3>Get in Touch</h3>
        <p>
        Interested in learning more about our telecommunication solutions?
         Contact us today to discover how we can enhance your connectivity 
         and support your business growth.
        </p>
      </div>
    </div>
  );
};

export default Telecom
