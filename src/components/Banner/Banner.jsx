
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-design-1"></div>
      <div className="banner-design-2"></div>
      <div className="banner-container">
        <div className="banner-content">
          <h4 className="text-white" data-aos="fade-right">Contact Us</h4>
          <h1 className="" data-aos="fade-right">We provide professional IT services for our customers.</h1>
        </div>
        <div className="banner-button-container" data-aos="fade-left">
          <a className="btn-explore" href="#">EXPLORE MORE</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
