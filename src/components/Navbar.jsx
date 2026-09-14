import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Bhavesh Gaurkar
      </div>

      <div className="nav-links">

        <a href="#home">
          <FaHome /> Home
        </a>

        <a href="#about">
          <FaUser /> About
        </a>

        <a href="#skills">
          <FaCode /> Skills
        </a>

        <a href="#experience">
          <FaBriefcase /> Experience
        </a>

        <a href="#projects">
          <FaProjectDiagram /> Projects
        </a>

        <a href="#education">
          <FaGraduationCap /> Education
        </a>

        <a href="#contact">
          <FaEnvelope /> Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;