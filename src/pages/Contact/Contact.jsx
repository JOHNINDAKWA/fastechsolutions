import "./Contact.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGlobeEurope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-cont">
      <div className="contact-banner">
        <div className="contact-banner-container" data-aos="zoom-in">
          <h1>Our Contacts</h1>
          <div className="contact-banner-links">
            <Link to={"/"}>Home</Link>
            <div className="contact-separator"></div>
            <Link to={"/"}>Pages</Link>
            <div className="contact-separator"></div>
            <Link to={"/about"} className="active">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-body">
          <div className="contact-body-left" data-aos="fade-right">
            <h3>Contact</h3>
            <h1>Illuminate Your Message Get in Contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              hic aspernatur unde magnam necessitatibus provident iusto maxime
              nobis esse eligendi.
            </p>
            <div className="contact-social-link">
              <a href="#" className="social-link2">
                <FaFacebook />
              </a>
              <a href="#" className="social-link2">
                <FaTwitter />
              </a>
              <a href="#" className="social-link2">
                <FaInstagram />
              </a>
              <a href="#" className="social-link2">
                <FaLinkedin />
              </a>
            </div>
            <div className="contact-info">
              <div className="contact-info-item">
                <FaGlobeEurope className="contact-info-icon" />
                <div className="item-contact">
                  <h3>Our Office</h3>
                  <span className="span1">Juja, Nairobi</span>
                  <span className="span2">Kimbo, Nairobi</span>
                </div>
              </div>

              <div className="contact-spliter">
                <div className="contact-info-item">
                  <FaEnvelope className="contact-info-icon" />
                  <div className="item-contact">
                    <h3>Mail Us</h3>
                    <span className="span1">fastech@gmail.com</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <FaPhone className="contact-info-icon" />
                  <div className="item-contact">
                    <h3>Telephone</h3>
                    <span className="span1">+254 702207999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-body-right" data-aos="fade-left">
            <form action="">
              <div className="input-divider">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="input-divider">
                <input type="tel" placeholder="Your Phone" />
                <input type="text" placeholder="Your Interested Service" />
              </div>
              <div className="contact-rest">
              <input type="text" placeholder="Your Phone" />
              <textarea placeholder="Body"></textarea>
              <button type="submit">Send Message</button> 
              </div>
            </form>
          </div>
        </div>

        <div className="contact-bottom">
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d140679.9951403412!2d36.99461739604087!3d-1.126513691018706!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1708677792152!5m2!1sen!2ske"
              height="450"
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Contact;
