
function Experience() {
  return (
    <>
      <style>{`
        /* =========================
           EXPERIENCE SECTION
        ========================= */

        .experience {
          padding: 100px 20px;
          background: #0f172a;
          color: #ffffff;
        }

        .experience .section-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .experience .section-title {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .experience > .section-container > h2 {
          margin: 0 0 45px;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* =========================
           EXPERIENCE CARD
        ========================= */

        .experience-card {
          position: relative;
          padding: 35px;
          background: rgba(30, 41, 59, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .experience-card::before {
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

        .experience-card:hover {
          transform: translateY(-7px);
          border-color: #38bdf8;
          box-shadow: 0 18px 40px rgba(56, 189, 248, 0.12);
        }

        /* =========================
           HEADER
        ========================= */

        .experience-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .experience-header h3 {
          margin: 0 0 8px;
          font-size: 25px;
          font-weight: 700;
          color: #f8fafc;
        }

        .experience-header h4 {
          margin: 0;
          font-size: 17px;
          font-weight: 500;
          color: #38bdf8;
        }

        .experience-header > span {
          flex-shrink: 0;
          padding: 8px 15px;
          border-radius: 20px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: #7dd3fc;
          font-size: 13px;
          font-weight: 600;
        }

        /* =========================
           LOCATION
        ========================= */

        .experience-location {
          margin: 18px 0 25px;
          color: #94a3b8;
          font-size: 15px;
        }

        /* =========================
           RESPONSIBILITIES
        ========================= */

        .experience-card ul {
          margin: 0 0 30px;
          padding-left: 22px;
        }

        .experience-card li {
          margin-bottom: 14px;
          padding-left: 8px;
          color: #cbd5e1;
          font-size: 16px;
          line-height: 1.7;
        }

        .experience-card li::marker {
          color: #38bdf8;
        }

        /* =========================
           TECHNOLOGIES
        ========================= */

        .experience-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 25px;
          border-top: 1px solid rgba(148, 163, 184, 0.12);
        }

        .experience-tech span {
          padding: 8px 14px;
          border-radius: 20px;
          background: #1e293b;
          border: 1px solid rgba(148, 163, 184, 0.15);
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .experience-tech span:hover {
          color: #38bdf8;
          border-color: #38bdf8;
          background: rgba(56, 189, 248, 0.06);
          transform: translateY(-2px);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 768px) {
          .experience {
            padding: 75px 20px;
          }

          .experience > .section-container > h2 {
            font-size: 34px;
          }

          .experience-card {
            padding: 28px 24px;
          }

          .experience-header {
            flex-direction: column;
            gap: 15px;
          }

          .experience-header h3 {
            font-size: 22px;
          }

          .experience-header > span {
            align-self: flex-start;
          }

          .experience-card li {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .experience {
            padding: 60px 16px;
          }

          .experience > .section-container > h2 {
            font-size: 29px;
          }

          .experience-card {
            padding: 25px 20px;
          }

          .experience-header h3 {
            font-size: 20px;
          }

          .experience-header h4 {
            font-size: 15px;
          }

          .experience-card li {
            font-size: 14px;
            line-height: 1.65;
          }

          .experience-tech {
            gap: 8px;
          }

          .experience-tech span {
            padding: 7px 11px;
            font-size: 12px;
          }
        }
      `}</style>

      <section id="experience" className="experience">
        <div className="section-container">

          <p className="section-title">Experience</p>

          <h2>My Professional Experience</h2>

          <div className="experience-card">

            <div className="experience-header">

              <div>
                <h3>Full Stack Developer Intern</h3>
                <h4>Sathya Technologies</h4>
              </div>

              <span>7 Months</span>

            </div>

            <p className="experience-location">
              Hyderabad, Telangana
            </p>

            <ul>

              <li>
                Worked on full-stack web application development using
                frontend and backend technologies.
              </li>

              <li>
                Developed and integrated RESTful APIs for web applications.
              </li>

              <li>
                Worked with databases and implemented CRUD operations.
              </li>

              <li>
                Used Git and GitHub for source code management and
                collaborated during development.
              </li>

            </ul>

            <div className="experience-tech">

              <span>JavaScript</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>REST API</span>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Experience;
