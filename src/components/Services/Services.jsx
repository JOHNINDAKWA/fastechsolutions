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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        deserunt in minus laboriosam corrupti deleniti voluptatibus rem
        reiciendis modi veniam animi?
      </p>

      <div className="service-items">
        <div className="service-item" data-aos="fade-right">
          <span>
            {" "}
            <SiAffine className="service-icon"/>
          </span>
          <h3>Service</h3>
          <h2>Enterprise Solutions</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus accusantium eveniet sed cum libero distinctio iste odio
            incidunt ratione!
          </p>
          <a href="/enterprise">Discover More</a>
        </div>
        <div className="service-item service-item-active" data-aos="zoom-in">
          <span>
            <SiAccusoft className="service-icon"/>
          </span>
          <h3>Service</h3>
          <h2>Cyber Security Solutions</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus accusantium eveniet sed cum libero distinctio iste odio
            incidunt ratione!
          </p>
          <a href="/cyber-security">Discover More</a>
        </div>
        <div className="service-item" data-aos="fade-left">
          <span>
            <SiAdobeacrobatreader className="service-icon"/>
          </span>
          <h3>Service</h3>
          <h2>Telecommunication Solutions</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus accusantium eveniet sed cum libero distinctio iste odio
            incidunt ratione!
          </p>
          <a href="/telecom">Discover More</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
