function Education() {
  return (
    <>
      <style>{`
        .education {
          padding: 100px 20px;
          background: #0f172a;
          color: #ffffff;
        }

        .education .section-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .education .section-title {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .education h2 {
          margin: 0 0 45px;
          font-size: 42px;
          font-weight: 700;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* =========================
           EDUCATION GRID
        ========================= */

        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .education-card {
          position: relative;
          padding: 30px;
          background: rgba(30, 41, 59, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .education-card::before {
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

        .education-card:hover {
          transform: translateY(-8px);
          border-color: #38bdf8;
          box-shadow: 0 15px 35px rgba(56, 189, 248, 0.12);
        }

        .education-card h3 {
          margin: 0 0 12px;
          font-size: 21px;
          color: #f8fafc;
          line-height: 1.4;
        }

        .education-card h4 {
          margin: 0 0 10px;
          font-size: 16px;
          font-weight: 500;
          color: #38bdf8;
          line-height: 1.5;
        }

        .education-card p {
          margin: 0 0 18px;
          color: #94a3b8;
          font-size: 15px;
        }

        .education-card span {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 20px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          color: #7dd3fc;
          font-size: 13px;
          font-weight: 600;
        }

        /* =========================
           PROBLEM SOLVING
        ========================= */

        .achievement {
          margin-top: 100px;
        }

        .achievement h2 {
          margin-bottom: 35px;
        }

        .achievement-card {
          position: relative;
          max-width: 850px;
          padding: 32px;
          background: linear-gradient(
            135deg,
            rgba(30, 41, 59, 0.9),
            rgba(15, 23, 42, 0.9)
          );
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 18px;
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-8px);
          border-color: #38bdf8;
          box-shadow: 0 15px 35px rgba(56, 189, 248, 0.15);
        }

        .achievement-card h3 {
          margin: 0 0 20px;
          font-size: 24px;
          color: #ffffff;
        }

        .achievement-card p {
          margin: 0 0 15px;
          color: #cbd5e1;
          font-size: 16px;
          line-height: 1.8;
        }

        .achievement-card p:last-child {
          margin-bottom: 0;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 768px) {
          .education {
            padding: 75px 20px;
          }

          .education h2 {
            font-size: 34px;
          }

          .education-grid {
            grid-template-columns: 1fr;
          }

          .achievement {
            margin-top: 75px;
          }

          .achievement-card {
            padding: 26px;
          }
        }

        @media (max-width: 480px) {
          .education {
            padding: 60px 16px;
          }

          .education h2 {
            font-size: 29px;
          }

          .education-card {
            padding: 25px 22px;
          }

          .education-card h3 {
            font-size: 19px;
          }

          .achievement-card h3 {
            font-size: 21px;
          }

          .achievement-card p {
            font-size: 15px;
          }
        }
      `}</style>

      <section id="education" className="education">
        <div className="section-container">

          <p className="section-title">Education</p>

          <h2>My Education</h2>

          <div className="education-grid">

            <div className="education-card">
              <h3>B.Tech – Information Technology</h3>

              <h4>
                V.M. Institute of Engineering and Technology
              </h4>

              <p>Nagpur, Maharashtra</p>

              <span>
                2021 – 2024 | CGPA: 6.65
              </span>
            </div>

            <div className="education-card">
              <h3>Diploma – Information Technology</h3>

              <h4>
                Government Polytechnic, Bramhapuri
              </h4>

              <p>Maharashtra</p>

              <span>
                2018 – 2021 | 80.75%
              </span>
            </div>

          </div>

          {/* Problem Solving */}

          <div className="achievement">

            <p className="section-title">Achievements & Activities</p>

            <h2>DSA & Problem Solving</h2>

            <div className="achievement-card">

              <h3>LeetCode Problem Solving</h3>

              <p>
                Solved 105+ Data Structures and Algorithms problems
                on LeetCode after completing DSA training from PW Skills.
              </p>

              <p>
                Active LeetCode practitioner, consistently solving
                problems in Java to strengthen problem-solving skills.
              </p>

              <p>
                Strong understanding of Object-Oriented Programming,
                DBMS, and Computer Networks through academic and
                practical projects.
              </p>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Education;