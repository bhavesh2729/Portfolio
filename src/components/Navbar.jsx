
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope
} from "react-icons/fa";

function Navbar() {
  return (
    <>
      <style>{`
        /* =========================
           NAVBAR
        ========================= */

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 6%;
          box-sizing: border-box;

          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border-bottom: 1px solid rgba(148, 163, 184, 0.12);

          z-index: 1000;
        }

        /* =========================
           LOGO
        ========================= */

        .logo {
          font-size: 21px;
          font-weight: 800;
          letter-spacing: 0.3px;
          white-space: nowrap;

          background: linear-gradient(
            90deg,
            #38bdf8,
            #818cf8
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* =========================
           NAV LINKS
        ========================= */

        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-links a {
          position: relative;

          display: flex;
          align-items: center;
          gap: 7px;

          padding: 9px 12px;

          color: #cbd5e1;
          text-decoration: none;

          font-size: 14px;
          font-weight: 500;

          border-radius: 8px;

          transition: all 0.3s ease;
        }

        .nav-links a svg {
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        /* Hover */

        .nav-links a:hover {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.07);
        }

        .nav-links a:hover svg {
          transform: translateY(-2px);
        }

        /* Bottom underline */

        .nav-links a::after {
          content: "";

          position: absolute;
          left: 50%;
          bottom: 2px;

          width: 0;
          height: 2px;

          background: #38bdf8;
          border-radius: 10px;

          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 60%;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1000px) {
          .navbar {
            padding: 0 3%;
          }

          .logo {
            font-size: 19px;
          }

          .nav-links {
            gap: 2px;
          }

          .nav-links a {
            padding: 8px 8px;
            font-size: 13px;
          }

          .nav-links a svg {
            font-size: 13px;
          }
        }

        @media (max-width: 800px) {
          .navbar {
            height: auto;
            min-height: 65px;
            padding: 12px 16px;

            flex-direction: column;
            gap: 10px;
          }

          .logo {
            font-size: 20px;
          }

          .nav-links {
            width: 100%;

            display: flex;
            justify-content: flex-start;

            overflow-x: auto;
            scrollbar-width: none;

            padding-bottom: 2px;
          }

          .nav-links::-webkit-scrollbar {
            display: none;
          }

          .nav-links a {
            flex-shrink: 0;
            padding: 8px 11px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 10px 12px;
          }

          .logo {
            font-size: 18px;
          }

          .nav-links {
            gap: 2px;
          }

          .nav-links a {
            padding: 7px 9px;
            font-size: 12px;
          }

          .nav-links a svg {
            font-size: 12px;
          }
        }
      `}</style>

      <nav className="navbar">

        <div className="logo">
          Bhavesh Gaurkar
        </div>

        <div className="nav-links">

          <a href="#home">
            <FaHome />
            <span>Home</span>
          </a>

          <a href="#about">
            <FaUser />
            <span>About</span>
          </a>

          <a href="#skills">
            <FaCode />
            <span>Skills</span>
          </a>

          <a href="#experience">
            <FaBriefcase />
            <span>Experience</span>
          </a>

          <a href="#projects">
            <FaProjectDiagram />
            <span>Projects</span>
          </a>

          <a href="#education">
            <FaGraduationCap />
            <span>Education</span>
          </a>

          <a href="#contact">
            <FaEnvelope />
            <span>Contact</span>
          </a>

        </div>

      </nav>
    </>
  );
}

export default Navbar;

