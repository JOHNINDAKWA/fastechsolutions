import './AboutSection.css'
import about1 from "../../assets/images/about.jpg";
import { MdStarPurple500 } from "react-icons/md";
import { FaAward } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <img src={about1} alt=""/>
      </div>
      <div className="about-right">
        <h3 data-aos="fade-left">About Us</h3>
        <h2 data-aos="fade-left">Fastech Solutions</h2>
        <p data-aos="fade-left">
          At Fastech Solutions, we deliver innovative and tailored solutions to
          empower businesses. Our Telecommunication Solutions provide high-speed
          fiber internet and robust network support for SMEs, ensuring reliable
          connectivity. We offer Enterprise Solutions that include comprehensive
          network support and CCTV installation for seamless operations.
          Additionally, our Cyber Security Solutions protect against evolving
          threats using advanced technologies like firewalls, Sophos, and
          Bitdefender. With a commitment to excellence, we are dedicated to
          fostering growth and security through technology.
        </p>

        <div className="experience-cards">
          <div className="left-card" data-aos="zoom-in">
            <MdStarPurple500 />
            <p>Over 25 Years of Combined Experience</p>
          </div>

          <div className="right-card" data-aos="zoom-in">
            <FaAward />
            <p>Distinguished by prestigious accolades</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
