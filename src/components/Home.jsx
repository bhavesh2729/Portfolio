function Home() {
  return (
    <>
      <style>{`
        .home {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px 60px;
          background:
            radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.12), transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(129, 140, 248, 0.10), transparent 30%),
            #0f172a;
          color: #ffffff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .home::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border: 1px solid rgba(56, 189, 248, 0.08);
          border-radius: 50%;
          top: 10%;
          left: -150px;
        }

        .home::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          border: 1px solid rgba(129, 140, 248, 0.08);
          border-radius: 50%;
          bottom: -250px;
          right: -150px;
        }

        .home-content {
          max-width: 900px;
          position: relative;
          z-index: 2;
        }

        .home h1 {
          margin: 0 0 15px;
          font-size: clamp(45px, 7vw, 78px);
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.1;
          background: linear-gradient(
            90deg,
            #ffffff,
            #38bdf8,
            #818cf8
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home h2 {
          margin: 0 0 25px;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600;
          color: #38bdf8;
        }

        .description {
          max-width: 700px;
          margin: 0 auto 40px;
          font-size: 18px;
          line-height: 1.8;
          color: #cbd5e1;
        }

        .home-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 170px;
          padding: 14px 26px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .primary-btn {
          color: #0f172a;
          background: #38bdf8;
          border: 2px solid #38bdf8;
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.2);
        }

        .primary-btn:hover {
          transform: translateY(-4px);
          background: #7dd3fc;
          border-color: #7dd3fc;
          box-shadow: 0 12px 30px rgba(56, 189, 248, 0.35);
        }

        .secondary-btn {
          color: #ffffff;
          background: transparent;
          border: 2px solid #475569;
        }

        .secondary-btn:hover {
          transform: translateY(-4px);
          color: #38bdf8;
          border-color: #38bdf8;
          background: rgba(56, 189, 248, 0.06);
        }

        @media (max-width: 768px) {
          .home {
            min-height: 90vh;
            padding: 100px 20px 60px;
          }

          .home h1 {
            letter-spacing: -1px;
          }

          .description {
            font-size: 16px;
            line-height: 1.7;
          }

          .home-buttons {
            gap: 12px;
          }

          .btn {
            min-width: 155px;
            padding: 13px 20px;
          }
        }

        @media (max-width: 480px) {
          .home {
            padding: 90px 16px 50px;
          }

          .home h1 {
            font-size: 42px;
          }

          .home h2 {
            font-size: 21px;
          }

          .description {
            font-size: 15px;
          }

          .home-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>

      <section id="home" className="home">
        <div className="home-content">

          <h1>Bhavesh Gaurkar</h1>

          <h2>MERN Stack | Full Stack Developer</h2>

          <p className="description">
            I build responsive and user-friendly web applications using
            JavaScript, React.js, Express.js, Node.js, and MongoDB.
            I enjoy solving problems, building real-world projects,
            and continuously improving my development skills.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="/MERN_Full_Stack_Developer.pdf"
              className="btn secondary-btn"
              download
            >
              MERN Stack Resume
            </a>
            <a
              href="/Full_Stack_Developer.pdf"
              className="btn secondary-btn"
              download
            >
              Full Stack Developer Resume
            </a>

          </div>

        </div>
      </section>
    </>
  );
}

export default Home;