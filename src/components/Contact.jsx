
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
    <>
      <style>{`
        /* =========================
           CONTACT SECTION
        ========================= */

        .contact {
          padding: 100px 20px;
          background: #0f172a;
          color: #ffffff;
          text-align: center;
        }

        .contact .section-container {
          max-width: 950px;
          margin: 0 auto;
        }

        .contact .section-title {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .contact h2 {
          margin: 0 0 20px;
          font-size: 44px;
          font-weight: 700;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-text {
          max-width: 700px;
          margin: 0 auto 45px;
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.8;
        }

        /* =========================
           CONTACT INFO
        ========================= */

        .contact-info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 45px;
        }

        .contact-info a,
        .contact-info > span {
          min-height: 100px;
          padding: 22px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          color: #e2e8f0;
          background: rgba(30, 41, 59, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 15px;

          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-info a:hover,
        .contact-info > span:hover {
          transform: translateY(-6px);
          color: #38bdf8;
          border-color: #38bdf8;
          box-shadow: 0 12px 30px rgba(56, 189, 248, 0.12);
        }

        .contact-info svg {
          flex-shrink: 0;
          font-size: 22px;
          color: #38bdf8;
        }

        .contact-info span {
          font-size: 14px;
          word-break: break-word;
        }

        /* =========================
           SOCIAL LINKS
        ========================= */

        .social-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
        }

        .social-links a {
          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #cbd5e1;
          background: #1e293b;
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 50%;

          text-decoration: none;
          font-size: 22px;

          transition: all 0.3s ease;
        }

        .social-links a:hover {
          transform: translateY(-6px) scale(1.05);
          color: #38bdf8;
          border-color: #38bdf8;
          box-shadow: 0 10px 25px rgba(56, 189, 248, 0.2);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 768px) {
          .contact {
            padding: 75px 20px;
          }

          .contact h2 {
            font-size: 34px;
          }

          .contact-text {
            font-size: 16px;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }

          .contact-info a,
          .contact-info > span {
            min-height: 80px;
          }
        }

        @media (max-width: 480px) {
          .contact {
            padding: 60px 16px;
          }

          .contact h2 {
            font-size: 29px;
          }

          .contact-text {
            font-size: 15px;
          }

          .social-links {
            gap: 14px;
          }

          .social-links a {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>

      <section id="contact" className="contact">
        <div className="section-container">

          <p className="section-title">Contact</p>

          <h2>Let's Work Together</h2>

          <p className="contact-text">
            I am currently looking for MERN Stack, Full Stack Developer,
            and React Developer opportunities. Feel free to connect with me
            for opportunities, projects, or collaboration.
          </p>

          <div className="contact-info">

            <a href="mailto:bhaveshgaurkar347@gmail.com">
              <FaEnvelope />
              <span>bhaveshgaurkar347@gmail.com</span>
            </a>

            <a href="tel:+917020648240">
              <FaPhone />
              <span>+91 7020648240</span>
            </a>

            <span>
              <FaMapMarkerAlt />
              <span>Pune, Maharashtra</span>
            </span>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/bhavesh2729"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bhavesh-gaurkar-0156a3233/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/bhaveshgaurkar347/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <FaCode />
            </a>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;

