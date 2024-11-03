import "./CyberSecurity.css";
import { Link } from "react-router-dom";
import firewallImage from "../../../assets/images/firewall.jpg";
import sophosImage from "../../../assets/images/about3.jpg";
import bitdefenderImage from "../../../assets/images/dale.png";
import { IoCheckmarkDone } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import Testimonial1 from '../../../assets/images/testimonial-1.jpg'
import Testimonial2 from '../../../assets/images/testimonial.jpg'

const CyberSecurity = () => {
  return (
    <div className="services">
      <div className="service-banner">
        <div className="service-banner-container" data-aos="zoom-in">
          <h1>Our Services</h1>
          <div className="service-banner-links">
            <Link to={"/"}>Home</Link>
            <div className="service-separator"></div>
            <Link to={"/"}>Pages</Link>
            <div className="service-separator"></div>
            <Link to={"/cyber-security"} className="active">
              Cyber Security
            </Link>
          </div>
        </div>
      </div>

      <div className="cyber-security-section">
        <h2 data-aos="zoom-in">Cyber Security Services</h2>
        <p className="cyber-info" data-aos="zoom-in">
          In today’s digital landscape, safeguarding your business from cyber
          threats is more crucial than ever. Our comprehensive Cyber Security
          services are designed to protect your valuable assets, ensuring your
          organization operates securely and efficiently.
        </p>


        <div className="cyber-security-services">
          <div className="cyber-service-item">
            <img src={firewallImage} alt="Firewall Protection" data-aos="fade-right"/>
            <div className="firewall" data-aos="fade-left">
              <h4>Firewalls</h4>
              <p>
                Firewalls act as a barrier between your internal network and
                external threats. We implement advanced firewall solutions to
                monitor and control incoming and outgoing network traffic,
                ensuring that only legitimate traffic is allowed.
              </p>
            </div>
          </div>

          <div className="cyber-service-item item-2">
            <div className="firewall" data-aos="fade-left">
              <h4>Sophos Security</h4>
              <p>
                Sophos provides a robust suite of security solutions that
                protect against malware, ransomware, and other sophisticated
                threats. Our team is experienced in deploying and managing
                Sophos products to secure your organization from evolving cyber
                threats.
              </p>
            </div>
            <img src={sophosImage} alt="Sophos Security" data-aos="fade-right"/>
          </div>

          <div className="cyber-service-item">
            <img src={bitdefenderImage} alt="Bitdefender Solutions" data-aos="fade-right"/>
            <div className="firewall" data-aos="fade-left">
              <h4>Bitdefender</h4>
              <p>
                Bitdefender is renowned for its advanced antivirus and
                anti-malware solutions. We utilize Bitdefender’s capabilities to
                offer real-time protection, ensuring that your systems remain
                safeguarded against the latest cyber threats.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="testimonial">
          <div className="testimonial-container">
          <div className="testimonial-left" data-aos="fade-right">
            <h3>Testimonial</h3>
            <h2>Powerfull Praise From Our Customers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              hic aspernatur unde magnam necessitatibus provident iusto maxime
              nobis esse eligendi.
            </p>
            <Link to={"/contact"}>Call Us Today</Link>
          </div>

          <div className="testimonial-right">
            <div className="testimonial-item" data-aos="fade-left">
              <div className="top-card">
                <img src={Testimonial1} alt="" />
                <div className="card-test-left">
                  <h3>Janice Ochieng&apos;</h3>
                  <p>Developer</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia hic aspernatur unde magnam necessitatibus provident
                  iusto maxime nobis esse eligendi.
                </p>
              </div>
            </div>


            <div className="testimonial-item" data-aos="fade-left">
              <div className="top-card">
                <img src={Testimonial2} alt="" />
                <div className="card-test-left">
                  <h3>Mercy Wairimu</h3>
                  <p>Developer</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia hic aspernatur unde magnam necessitatibus provident
                  iusto maxime nobis esse eligendi.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="cyber-security-section-2" data-aos="zoom-in">
          <h3>Why Choose Our Cyber Security Services?</h3>
          <ul>
            <li>
              <IoCheckmarkDone className="cyber-link" />
              Comprehensive assessments to identify vulnerabilities.
            </li>
            <li>
              <IoCheckmarkDone className="cyber-link" />
              24/7 monitoring and support to respond to incidents swiftly.
            </li>
            <li>
              <IoCheckmarkDone className="cyber-link" />
              Tailored security solutions to meet your unique business needs.
            </li>
            <li>
              <IoCheckmarkDone className="cyber-link" />
              Ongoing education and training for your team on best practices in
              cybersecurity.
            </li>

            <li>
              <IoCheckmarkDone className="cyber-link" />
              Regular updates and patches to ensure the latest protection.
            </li>
          </ul>

          <h3 className="cyber-h3">The Importance of Cyber Security</h3>
          <p>
            With the increasing frequency and sophistication of cyber attacks,
            businesses cannot afford to overlook cybersecurity. A robust
            cybersecurity strategy not only protects your data but also builds
            trust with your customers. Our experts are dedicated to providing
            top-notch services that help mitigate risks and safeguard your
            business reputation.
          </p>

          <h3>Get in Touch</h3>
          <p>
            Interested in learning more about our Cyber Security services?
            Contact us today to discuss how we can help secure your business
            against cyber threats. Our team is ready to provide you with the
            insights and solutions you need to protect your assets and ensure
            business continuity.
          </p>
        </div>
      </div>
    
  );
};

export default CyberSecurity;
