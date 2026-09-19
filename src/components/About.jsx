function About() {
  return (
    <>
      <style>{`
        /* =========================
           ABOUT SECTION
        ========================= */

        .about {
          padding: 100px 20px;
          background: #0f172a;
          color: #ffffff;
        }

        .section-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          display: inline-block;
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .about h2 {
          margin: 0 0 25px;
          font-size: 44px;
          font-weight: 700;
          line-height: 1.2;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-text {
          max-width: 900px;
          margin-bottom: 50px;
          font-size: 17px;
          line-height: 1.9;
          color: #cbd5e1;
        }

        /* =========================
           INFO CARDS
        ========================= */

        .about-info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .about-info > div {
          padding: 28px 25px;
          background: rgba(30, 41, 59, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .about-info > div:hover {
          transform: translateY(-8px);
          border-color: #38bdf8;
          box-shadow: 0 15px 35px rgba(56, 189, 248, 0.15);
        }

        .about-info strong {
          font-size: 14px;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .about-info span {
          font-size: 16px;
          color: #f8fafc;
          line-height: 1.5;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 768px) {
          .about {
            padding: 75px 20px;
          }

          .about h2 {
            font-size: 34px;
          }

          .about-text {
            font-size: 16px;
            line-height: 1.8;
          }

          .about-info {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }

        @media (max-width: 480px) {
          .about {
            padding: 60px 16px;
          }

          .about h2 {
            font-size: 29px;
          }

          .about-text {
            font-size: 15px;
          }
        }
      `}</style>

      <section id="about" className="about">
        <div className="section-container">

          <p className="section-title">About Me</p>

          <h2>MERN Stack | Full Stack Developer</h2>

          <p className="about-text">
            I am Full Stack Developer with hands-on experience in building
            responsive and scalable web applications using the MERN Stack
            (MongoDB, Express.js, React.js, and Node.js). I completed a 7-month
            Full Stack Developer internship at Sathya Technologies, Hyderabad,
            where I worked on REST APIs, authentication, CRUD operations, and
            database integration. I have also built multiple full-stack
            projects independently, focusing on clean code, user-friendly
            interfaces, and practical problem-solving. I continuously improve
            my Data Structures and Algorithms skills through regular LeetCode
            practice.
          </p>

          <div className="about-info">

            <div>
              <strong>Education</strong>
              <span>B.Tech – Information Technology</span>
            </div>

            <div>
              <strong>Experience</strong>
              <span>7-Month Full Stack Internship</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Pune, Maharashtra</span>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;