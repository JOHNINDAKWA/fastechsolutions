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
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_o6okybg', 'template_51v7tzc', formRef.current, 'urJ5kaDu1-lHhAuEH')
    .then(() => {
      toast.success('✅ Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error('❌ Failed to send message. Please try again.');
    });
};

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
              Connect with us to experience reliable, high-speed connectivity
              and comprehensive security solutions. At Fastech Solutions,
              we&apos;re dedicated to helping businesses grow with advanced
              telecommunication and cybersecurity services tailored to meet your
              needs. Let&apos;s build a secure, connected future together.
            </p>

            <div className="contact-social-link">
              <a
                href="https://www.facebook.com/profile.php?id=61550241804576"
                className="social-link2"
              >
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
                  <span className="span1">
                    Head office: Chokaa,off Kangundo road, Nairobi.
                  </span>
                  <span className="span2">
                    Malaa office: Kantafu, Kangundo Road, Nairobi.
                  </span>
                </div>
              </div>

              <div className="contact-spliter">
                <div className="contact-info-item">
                  <FaEnvelope className="contact-info-icon" />
                  <div className="item-contact">
                    <h3>Mail Us</h3>
                    <span className="span1">fastech248@gmail.com</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <FaPhone className="contact-info-icon" />
                  <div className="item-contact">
                    <h3>Telephone</h3>
                    <span className="span1">0748764766 0716016706</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-body-right" data-aos="fade-left">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="input-divider">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="input-divider">
                <input type="tel" name="user_phone" placeholder="Your Phone" />
                <input
                  type="text"
                  name="user_service"
                  placeholder="Interested Service"
                />
              </div>
              <div className="contact-rest">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-bottom">
          <figure>
            <iframe
              title="Fastech Solutions Locations"
              width="100%"
              height="450"
              src="https://www.google.com/maps/d/u/0/embed?mid=1ctDDBPt0XM5PeK4TcjelqytqMAYYhkw&ehbc=2E312F&noprof=1"
            ></iframe>
          </figure>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default Contact;
