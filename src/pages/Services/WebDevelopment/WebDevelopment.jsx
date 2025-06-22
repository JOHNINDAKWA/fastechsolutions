import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight, // For CTA buttons and links// For "Why Choose Us" section
  FaMobileAlt, // For Responsive Web Development
  FaShoppingCart, // For E-commerce Platforms
  FaWordpressSimple, // For Content Management Systems
  FaLaptopCode, // For Web Applications
  FaCloudUploadAlt, // For API Integrations

  FaReact,
  FaVuejs,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaAws, // Technologies
  FaDocker,
} from "react-icons/fa";

import { GiWaveSurfer } from "react-icons/gi"; // Example of a unique icon
import { MdOutlineSecurity } from "react-icons/md"; // For security, a bit more specific than FaLock
import { RiSpeedUpLine } from "react-icons/ri";

import "./WebDevelopment.css"; 
import WebDevIllustration from "../../../assets/images/web-dev2.png";

import Portfolio_Two from "../../../assets/images/portfolio1.jpeg";
import Portfolio_One from "../../../assets/images/portfolio2.jpeg";
import Portfolio_Three from "../../../assets/images/portfolio3.jpeg";
import Portfolio_Four from "../../../assets/images/portfolio4.jpeg";
import Portfolio_Five from "../../../assets/images/portfolio5.jpeg";
import Portfolio_Six from "../../../assets/images/portfolio6.jpeg";
import Portfolio_Seven from "../../../assets/images/portfolio7.jpeg";

const WebDevelopment = () => {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

// Data for "What We Offer" section - REDUCED TO 8, ICONS UPDATED
const servicesOffered = [
  { icon: GiWaveSurfer, title: "Custom Website Design", description: "Unique and captivating designs tailored to your brand, ensuring a distinct online presence with a fluid user experience." },
  { icon: FaMobileAlt, title: "Responsive Development", description: "Building websites that look and perform flawlessly across all devices – desktops, tablets, and mobile phones for maximum reach." },
  { icon: FaShoppingCart, title: "E-commerce Platforms", description: "Developing robust and secure online stores (Shopify, WooCommerce, custom) to drive your sales and scale your business." },
  { icon: FaWordpressSimple, title: "CMS Solutions", description: "Empowering you with easy-to-use platforms like WordPress, Strapi, or custom headless CMS for effortless content management." },
  { icon: FaLaptopCode, title: "Web Applications", description: "Crafting powerful web apps like custom portals, interactive dashboards, and SaaS solutions tailored to your unique business processes." },
  { icon: FaCloudUploadAlt, title: "API Integrations", description: "Seamlessly connecting your website with third-party services, payment gateways, and CRM systems for enhanced functionality." },
  { icon: MdOutlineSecurity, title: "Security Hardening", description: "Implementing advanced security measures including HTTPS, firewalls, and regular backups to protect your website from cyber threats." },
  { icon: RiSpeedUpLine, title: "Performance Optimization", description: "Optimizing website speed and loading times for a superior user experience and better search engine rankings, ensuring fast and fluid interactions." },

];

  // Data for "Technologies We Use" section
  const technologies = {
    Frontend: [
      { icon: FaReact, name: "React" },
      { icon: FaVuejs, name: "Vue.js" },
      { icon: FaAngular, name: "Angular" },
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS3" },
    ],
    Backend: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaPhp, name: "Laravel (PHP)" },
      { icon: FaPython, name: "Django (Python)" },
    ],
    CMS: [
      { icon: FaWordpressSimple, name: "WordPress" },
      { name: "Strapi" },
      { name: "Sanity" },
    ],
    "Hosting/DevOps": [
      { icon: FaAws, name: "AWS" },
      { name: "Vercel" },
      { name: "DigitalOcean" },
      { icon: FaDocker, name: "Docker" },
    ],
  };

  // Data for "Portfolio" section (Placeholder)
const portfolioProjects = [
  {
    name: "E-commerce Store Redesign",
    techStack: "React, Node.js, Shopify API",
    summary:
      "Revamped a fashion e-commerce site with a modern UI and faster checkout process, leading to a 30% increase in conversions.",
    image: Portfolio_Two, // Placeholder image
    link: "#",
  },
  {
    name: "Saas QuickDesk Helpdesk System",
    techStack: "Next.js, NodeJs, PostgreSql",
    summary:
      "Developed an intuitive dashboard for managing user subscriptions and analytics for a B2B SaaS platform.",
    image: Portfolio_One,
    link: "#",
  },
  {
    name: "Non-Profit Information Hub",
    techStack: "WordPress, Custom Plugins",
    summary:
      "Created a comprehensive and easy-to-update website for a non-profit, enhancing their online outreach and donation capabilities.",
    image: Portfolio_Three,
    link: "#",
  },
  {
    name: "Logistics Tracking System",
    techStack: "Angular, Spring Boot, PostgreSQL",
    summary:
      "Built a real-time logistics tracking web application, optimizing delivery routes and improving operational efficiency.",
    image: Portfolio_Five,
    link: "#",
  },
  {
    name: "Pregnancy Spa Booking Platform",
    techStack: "Next.js, Firebase",
    summary:
      "Developed a custom online booking system for a local service provider, offering seamless appointment scheduling for clients.",
    image: Portfolio_Four,
    link: "#",
  },
  {
    name: "Ted Malanda Blog System",
    techStack: "Next.js, MongoDB, Express.js",
    summary:
      "Designed a personal blogging platform for Ted Malanda with category filtering, search, event highlights, and article organization tailored for opinion journalism.",
    image: Portfolio_Six, // Assign the imported image here
    link: "#",
  },
  {
    name: "MacroMate Chrome Extension & Dashboard",
    techStack: "JavaScript, Chrome APIs, React, Express.js, MongoDB",
    summary:
      "Built a custom support automation tool used by One Acre Fund’s customer service team to streamline macro selection, fetch client data from PaygOps and Connex, and auto-fill Zendesk tickets with reusable templates.",
    image: Portfolio_Seven, // Assign the correct image import for MacroMate
    link: "#",
  },
];


  // Data for "Process Workflow" section
  const processSteps = [
    {
      title: "Consultation",
      description:
        "We start by understanding your vision, goals, and specific requirements through in-depth discussions.",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive user interfaces and engaging user experiences with wireframes, mockups, and prototypes.",
    },
    {
      title: "Development",
      description:
        "Our expert developers write clean, efficient, and scalable code using the latest technologies.",
    },
    {
      title: "Testing",
      description:
        "Rigorous testing phases ensure your website is bug-free, secure, and performs optimally across all devices.",
    },
    {
      title: "Deployment",
      description:
        "Seamless launch of your website to a live environment, ensuring a smooth transition and minimal downtime.",
    },
    {
      title: "Ongoing Support",
      description:
        "Providing continuous maintenance, updates, and support to keep your website running perfectly and evolving with your needs.",
    },
  ];

  // Data for FAQs
  const faqs = [
    {
      question: "What's the cost range for a new website?",
      answer:
        "The cost of a new website varies widely depending on complexity, features, and design. Simple informational sites might start from $200, while complex e-commerce or custom web applications can range from $400 to $800+.",
    },
    {
      question: "How long does development take?",
      answer:
        "Development timelines depend on project scope. A basic website might take 4-6 weeks, while more complex projects can take 3-6 months or longer. We provide a detailed timeline after the consultation phase.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes, absolutely! We offer comprehensive website redesign services to refresh your site's aesthetics, improve user experience, update technologies, and boost performance and SEO.",
    },
    {
      question: "Do you provide hosting?",
      answer:
        "While we don't directly provide hosting as a primary service, we can guide you in choosing the best hosting solutions tailored to your website's needs and can assist with deployment and configuration on your chosen host.",
    },
    {
      question: "Is the site SEO-ready and mobile-friendly?",
      answer:
        "Yes, all websites we build are developed with SEO best practices in mind and are inherently responsive, ensuring they look and function perfectly on all devices (desktops, tablets, and mobile phones).",
    },
  ];

  return (
    <div className="web-development-page">
      <div className="web-banner">
        <div className="web-banner-container" data-aos="zoom-in">
          <h1>Our Services</h1>
          <div className="web-banner-links">
            <Link to={"/"}>Home</Link>
            <div className="web-separator"></div>
            <Link to={"/"}>Services</Link>
            <div className="web-separator"></div>
            <Link to={"/web-development"} className="active">
              Web Development
            </Link>
          </div>
        </div>
      </div>

{/* 1. Hero Part - NEW DESIGN */}
      <div className="web-hero-new">
        <div className="web-hero-content-new" data-aos="fade-right">
          <h1 data-aos="fade-up">Custom Web Development that Powers Business Growth</h1>
          <p data-aos="fade-up" data-aos-delay="100">We build fast, secure, and scalable websites tailored to your needs.</p>
          <div className="web-hero-ctas-new" data-aos="fade-up">
            <Link to="/contact" className="hero-btn-new primary-btn-new">
              Get a Quote Today <FaArrowRight />
            </Link>
            <a href="#portfolio" className="hero-btn-new secondary-btn-new">
              See Our Work <FaArrowRight />
            </a>
          </div>
        </div>
        <div className="web-hero-illustration" data-aos="fade-left">
          {/* Use your imported image here */}
          <img src={WebDevIllustration} alt="Modern Web Development Dashboard Illustration" />
        </div>
      </div>

      {/* 2. What We Offer */}
<section className="web-section web-services-modern">
  <h2 className="section-title" data-aos="fade-up">
    Our Web Development Services Include:
  </h2>
  <div className="web-service-cards">
    {servicesOffered.map((service, index) => (
      <div
        className="web-service-card"
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 80}
      >
        <div className="web-service-icon">
          <service.icon />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to={service.link || "#"} className="web-service-link">
          Learn More <FaArrowRight />
        </Link>
      </div>
    ))}
  </div>
</section>


{/* 3. Technologies We Use - NEW DESIGN */}
      <section className="web-section technologies-we-use-new">
        <h2 className="section-title" data-aos="fade-up">Technologies We Use</h2>
        <div className="tech-categories-grid-new"> {/* Changed class name */}
          {Object.entries(technologies).map(([category, techList], catIndex) => (
            <div
              className="tech-category-card-new" /* Changed class name */
              key={catIndex}
              data-aos="fade-up"
              data-aos-delay={catIndex * 100}
            >
              <h3>{category}</h3>
              <div className="tech-list-new"> {/* Changed class name */}
                {techList.map((tech, techIndex) => (
                  <span className="tech-badge-new" key={techIndex}> {/* Changed class name */}
                    {tech.icon && <tech.icon className="tech-badge-icon-new" />} {/* Changed class name */}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Portfolio or Showcase */}
      <section id="portfolio" className="web-section portfolio-showcase">
        <h2 className="section-title" data-aos="fade-up">
          Some Projects We have Delivered
        </h2>
        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <div
              className="portfolio-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.name}
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3>{project.name}</h3>
                <p className="portfolio-tech-stack">{project.techStack}</p>
                <p className="portfolio-summary">{project.summary}</p>
                {/* <Link to={project.link} className="portfolio-link">
                  View Project <FaArrowRight />
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Process Workflow */}
      <section className="web-section process-workflow">
        <h2 className="section-title" data-aos="fade-up">
          How We Work
        </h2>
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div
              className="process-step"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="step-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="web-section faqs-section">
        <h2 className="section-title" data-aos="fade-up">
          Web Development FAQs
        </h2>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span
                  className={`faq-arrow ${openFaq === index ? "open" : ""}`}
                >
                  &#9660;
                </span>{" "}
                {/* Down arrow */}
              </button>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;
