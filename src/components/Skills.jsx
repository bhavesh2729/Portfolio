
function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript"]
    },

    {
      title: "Frontend Technologies",
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Material UI"
      ]
    },

    {
      title: "Backend Technologies",
      skills: [
        "Node.js",
        "Express.js",
        "EJS",
        "REST APIs"
      ]
    },

    {
      title: "Databases",
      skills: [
        "MySQL",
        "MongoDB"
      ]
    },

    {
      title: "Integrations & APIs",
      skills: [
        "Cloudinary",
        "Razorpay",
        "OpenWeatherMap API"
      ]
    },

    {
      title: "Developer Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "IntelliJ IDEA",
        "Eclipse"
      ]
    },

    {
      title: "Core Concepts",
      skills: [
        "Data Structures & Algorithms",
        "Authentication",
        "Authorization",
        "CRUD Operations",
        "OOPs",
        "DBMS"
      ]
    }
  ];

  return (
    <>
      <style>{`
        /* =========================
           SKILLS SECTION
        ========================= */

        .skills {
          padding: 100px 20px;
          background: #0f172a;
          color: #ffffff;
        }

        .skills .section-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .skills .section-title {
          display: inline-block;
          margin-bottom: 12px;

          font-size: 14px;
          font-weight: 600;

          color: #38bdf8;

          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .skills h2 {
          margin: 0 0 45px;

          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;

          background: linear-gradient(
            90deg,
            #38bdf8,
            #818cf8
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* =========================
           SKILLS GRID
        ========================= */

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        /* =========================
           SKILL CARD
        ========================= */

        .skill-card {
          position: relative;

          padding: 28px;

          background: rgba(30, 41, 59, 0.75);

          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 18px;

          overflow: hidden;

          transition: all 0.3s ease;
        }

        .skill-card::before {
          content: "";

          position: absolute;
          top: 0;
          left: 0;

          width: 4px;
          height: 100%;

          background: linear-gradient(
            to bottom,
            #38bdf8,
            #818cf8
          );
        }

        .skill-card:hover {
          transform: translateY(-7px);

          border-color: rgba(56, 189, 248, 0.5);

          box-shadow:
            0 15px 35px rgba(56, 189, 248, 0.12);
        }

        /* =========================
           SKILL TITLE
        ========================= */

        .skill-card h3 {
          margin: 0 0 20px;

          font-size: 19px;
          font-weight: 600;

          color: #f8fafc;
        }

        /* =========================
           SKILL LIST
        ========================= */

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-list span {
          padding: 8px 13px;

          color: #cbd5e1;

          background: #1e293b;

          border: 1px solid rgba(148, 163, 184, 0.15);

          border-radius: 20px;

          font-size: 13px;
          font-weight: 500;

          transition: all 0.25s ease;
        }

        .skill-list span:hover {
          color: #38bdf8;

          border-color: #38bdf8;

          background: rgba(56, 189, 248, 0.06);

          transform: translateY(-2px);
        }

        /* =========================
           LAST CARD
        ========================= */

        .skill-card:last-child {
          grid-column: span 2;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 768px) {
          .skills {
            padding: 75px 20px;
          }

          .skills h2 {
            font-size: 34px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card:last-child {
            grid-column: span 1;
          }

          .skill-card {
            padding: 25px;
          }
        }

        @media (max-width: 480px) {
          .skills {
            padding: 60px 16px;
          }

          .skills h2 {
            font-size: 29px;
          }

          .skill-card {
            padding: 23px 20px;
          }

          .skill-card h3 {
            font-size: 18px;
          }

          .skill-list {
            gap: 8px;
          }

          .skill-list span {
            padding: 7px 10px;
            font-size: 12px;
          }
        }
      `}</style>

      <section id="skills" className="skills">
        <div className="section-container">

          <p className="section-title">My Skills</p>

          <h2>Technologies I Work With</h2>

          <div className="skills-grid">

            {skillGroups.map((group) => (
              <div
                className="skill-card"
                key={group.title}
              >

                <h3>{group.title}</h3>

                <div className="skill-list">

                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;

