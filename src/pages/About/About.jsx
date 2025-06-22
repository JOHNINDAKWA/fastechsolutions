import "./About.css";
import { Link } from "react-router-dom";
import { SiAlmalinux } from "react-icons/si";
import { SiAmazonluna } from "react-icons/si";
import aboutsec from "../../assets/images/it-sols.png";
import MainImage from "../../assets/images/fast.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import Banner from "./../../components/Banner/Banner";

const About = () => {
  const whyChooseUsItems = [
    {
      id: 1,
      title: "Customer Support at the Core",
      icon: <RiCustomerService2Fill />,
      description: [
        "We understand the value of strong relationships and treat every client like a part of our extended family.",
        "Our journey began with a passion for technology and a shared vision to make IT accessible and reliable for all.",
      ],
    },
    {
      id: 2,
      title: "Expert IT Solutions",
      icon: <SiAlmalinux />,
      description: [
        "Our team consists of industry experts with years of experience in delivering cutting-edge IT solutions.",
        "We stay updated with the latest technology trends to provide our clients with the best services possible.",
      ],
    },
    {
      id: 3,
      title: "Customized Approach",
      icon: <SiAmazonluna />,
      description: [
        "We tailor our services to meet the unique needs of each client, ensuring personalized and effective solutions.",
        "From small businesses to large enterprises, we create strategies that drive success.",
      ],
    },
    {
      id: 4,
      title: "24/7 Availability",
      icon: <RiCustomerService2Fill />,
      description: [
        "Our support team is available around the clock to assist you with any issues that may arise.",
        "We prioritize your business continuity, ensuring minimal downtime and quick resolutions.",
      ],
    },
    {
      id: 5,
      title: "Proven Track Record",
      icon: <SiAlmalinux />,
      description: [
        "With over 25 years of experience, we have a proven track record of successfully delivering IT services.",
        "Our satisfied clients are a testament to the quality and reliability of our work.",
      ],
    },
    {
      id: 6,
      title: "Innovative Technology",
      icon: <SiAmazonluna />,
      description: [
        "We leverage the latest technology to ensure that our clients remain competitive and efficient.",
        "Innovation is at the heart of our solutions, allowing us to provide future-ready services.",
      ],
    },
  ];

  const rows = [];
  for (let i = 0; i < whyChooseUsItems.length; i += 3) {
    rows.push(whyChooseUsItems.slice(i, i + 3));
  }

  return (
    <div>
      <div className="about-banner">
        <div className="about-banner-container" data-aos="zoom-in">
          <h1>About Us</h1>
          <div className="banner-links">
            <Link to={"/"}>Home</Link>
            <div className="about-separator"></div>
            <Link to={"/"}>Pages</Link>
            <div className="about-separator"></div>
            <Link to={"/about"} className="active">
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="about-body">
        <div className="about-body-left" data-aos="fade-right">
          <h3>About Us</h3>
          <h1>Delivering Exceptional IT Solutions Tailored to Your Needs</h1>
          <div className="about-feature">
            <div className="about-feature-item">
              <SiAlmalinux />
              <p>Rapid Response IT Support</p>
            </div>

            <div className="about-feature-item">
              <SiAmazonluna />
              <p>Comprehensive Service Suite</p>
            </div>
            <p>
              Our team is dedicated to delivering the highest quality IT
              services, from emergency support to full-service solutions,
              ensuring your technology aligns seamlessly with your goals.
              Whether you need on-the-spot troubleshooting or long-term
              strategic planning, we’ve got you covered. Trust us to help you
              harness the power of technology with expertise and reliability.
            </p>

            <button>Contact Us</button>
          </div>
        </div>

        <div className="about-body-left" data-aos="fade-left">
          <div className="about-main-img">
            <img src={MainImage} alt="Our team at work" />
          </div>
          <div className="about-sec-img">
            <div className="about-experience">
              <p>25+</p>
              <span>Years of Expertise in IT Solutions</span>
            </div>

            <img
              src={aboutsec}
              className="image-sec-image"
              alt="Experience and expertise"
            />
          </div>
        </div>
      </div>

      <Banner />

      <div className="about-wsu about-full">
        <h2 data-aos="zoom-in">Why Choose Us</h2>
        <p data-aos="zoom-in">
          Discover what makes us the preferred choice for quality IT services.
        </p>

        <table className="about-wsu-table">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((item) => (
                  <td key={item.id} className="about-wsu-item-cell" data-aos="zoom-in">
                    <div className="about-wsu-item">
                      <div className="item-header">
                        <span>{item.id}</span>
                        <p>{item.title}</p>
                        {item.icon}
                      </div>
                      <ul>
                        {item.description.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="about-wsu about-mobile">
        <h2>Why Choose Us</h2>
        <p>
          Discover what makes us the preferred choice for quality IT services.
        </p>

        <div className="about-wsu-container">
          {whyChooseUsItems.map((item) => (
            <div key={item.id} className="about-wsu-item">
              <div className="item-header">
                <span>{item.id}</span>
                <p>{item.title}</p>
                {item.icon}
              </div>
              <ul>
                {item.description.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
