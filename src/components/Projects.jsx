
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "VenusMart",
      category: "E-Commerce Web Application",
      description:
        "A full-stack e-commerce web application with user authentication, product management, cart, wishlist, orders, reviews and online payment integration.",
      technologies: [
        "Node.js",
        "Express.js",
        "EJS",
        "MongoDB",
        "Mongoose",
        "Bootstrap"
      ],
      github: "https://github.com/bhavesh2729/VenusMart",
      live: "https://venusmart.onrender.com"
    },

    {
      title: "Spotify",
      category: "Music Streaming Web Application",
      description:
        "A music streaming web application with Admin/User roles, song management, search, categories, playlists, liked songs and a custom music player.",
      technologies: [
        "Node.js",
        "Express.js",
        "EJS",
        "MongoDB",
        "Mongoose",
        "Bootstrap"
      ],
      github: "https://github.com/bhavesh2729/Spotify",
      live: "https://spotify-iqt8.onrender.com"
    },

    {
      title: "Wanderlust",
      category: "Travel Stay & Booking Platform",
      description:
        "A travel stay and booking platform with authentication, property listings, reviews, image uploads, maps and booking-related features.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "Cloudinary",
        "Mapbox"
      ],
      github: "https://github.com/bhavesh2729/Wanderlust-Project",
      live: "https://wanderlust-project-52dr.onrender.com"
    }
  ];

  return (
    <>
      <style>{`
        /* =========================
           PROJECTS SECTION
        ========================= */

        .projects {
          padding: 100px 20px;
          background: #0f172a;
          color: #ffffff;
        }

        .projects .section-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .projects .section-title {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .projects h2 {
          margin: 0 0 45px;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* =========================
           PROJECT GRID
        ========================= */

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        /* =========================
           PROJECT CARD
        ========================= */

        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;

          min-height: 440px;
          padding: 30px;

          background: rgba(30, 41, 59, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 20px;

          overflow: hidden;
          transition: all 0.35s ease;
        }

        .project-card::before {
          content: "";

          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          height: 3px;

          background: linear-gradient(
            90deg,
            #38bdf8,
            #818cf8
          );

          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 20px 45px rgba(56, 189, 248, 0.12);
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        /* =========================
           CATEGORY
        ========================= */

        .project-category {
          margin: 0 0 12px;

          color: #38bdf8;
          font-size: 12px;
          font-weight: 600;

          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* =========================
           TITLE
        ========================= */

        .project-card h3 {
          margin: 0 0 18px;

          font-size: 26px;
          font-weight: 700;
          color: #f8fafc;
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .project-description {
          margin: 0 0 22px;

          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =========================
           TECHNOLOGIES
        ========================= */

        .project-tech {
          margin: 0 0 25px;

          color: #94a3b8;
          font-size: 13px;
          line-height: 1.7;
        }

        .project-tech strong {
          color: #e2e8f0;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;

          margin-bottom: 25px;
        }

        .tech-badge {
          padding: 6px 10px;

          color: #cbd5e1;
          background: #1e293b;

          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 20px;

          font-size: 12px;
          font-weight: 500;

          transition: all 0.25s ease;
        }

        .tech-badge:hover {
          color: #38bdf8;
          border-color: #38bdf8;
          background: rgba(56, 189, 248, 0.06);
        }

        /* =========================
           BUTTONS
        ========================= */

        .project-buttons {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .project-buttons a {
          flex: 1;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 11px 14px;

          border-radius: 9px;
          text-decoration: none;

          font-size: 13px;
          font-weight: 600;

          transition: all 0.3s ease;
        }

        .github-btn {
          color: #e2e8f0;
          background: #1e293b;
          border: 1px solid #475569;
        }

        .github-btn:hover {
          color: #ffffff;
          background: #334155;
          border-color: #64748b;
          transform: translateY(-2px);
        }

        .live-btn {
          color: #0f172a;
          background: #38bdf8;
          border: 1px solid #38bdf8;
        }

        .live-btn:hover {
          background: #7dd3fc;
          border-color: #7dd3fc;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(56, 189, 248, 0.2);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1000px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 75px 20px;
          }

          .projects h2 {
            font-size: 34px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .projects {
            padding: 60px 16px;
          }

          .projects h2 {
            font-size: 29px;
          }

          .project-card {
            padding: 25px 22px;
          }

          .project-card h3 {
            font-size: 23px;
          }

          .project-description {
            font-size: 14px;
          }

          .project-buttons {
            flex-direction: column;
          }

          .project-buttons a {
            width: 100%;
          }
        }
      `}</style>

      <section id="projects" className="projects">
        <div className="section-container">

          <p className="section-title">Projects</p>

          <h2>Projects I Have Built</h2>

          <div className="projects-grid">

            {projects.map((project) => (
              <div className="project-card" key={project.title}>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-tech">
                  <strong>Technologies:</strong>
                </p>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span className="tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    className="github-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="live-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;

