
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCode
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">

        <p className="section-title">Contact</p>

        <h2>Let's Work Together</h2>

        <p className="contact-text">
          I am currently looking for Full Stack Developer,
          Java Developer and React Developer opportunities.
          Feel free to connect with me.
        </p>

        <div className="contact-info">

          <a href="mailto:bhaveshgaurkar347@gmail.com">
            <FaEnvelope />
            <span> bhaveshgaurkar347@gmail.com</span>
          </a>

          <a href="tel:+917020648240">
            <FaPhone />
             <span> +91 7020648240</span>
          </a>

          <span>
            <FaMapMarkerAlt />
            <span> Nagpur, Maharashtra</span>
          </span>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/bhavesh2729"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
           
            <span> <FaGithub /></span>
          </a>

          <a
            href="https://www.linkedin.com/in/bhavesh-gaurkar-0156a3233/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            
            <span><FaLinkedin /></span>
          </a>

          <a
            href="https://leetcode.com/u/bhaveshgaurkar347/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            
            <span><FaCode /></span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;

