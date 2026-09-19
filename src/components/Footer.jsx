function Footer() {
  return (
    <>
      <style>{`
        .footer {
          padding: 30px 20px;
          background: #020617;
          border-top: 1px solid rgba(148, 163, 184, 0.12);
          text-align: center;
          color: #94a3b8;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-main {
          margin: 0 0 8px;
          font-size: 14px;
          font-weight: 500;
        }

        .footer-main span {
          color: #38bdf8;
          font-weight: 600;
        }

        .footer-sub {
          margin: 0;
          font-size: 13px;
          color: #64748b;
        }

        .footer-sub span {
          color: #818cf8;
          font-weight: 600;
        }

        .footer-line {
          width: 60px;
          height: 2px;
          margin: 0 auto 18px;
          background: linear-gradient(
            90deg,
            #38bdf8,
            #818cf8
          );
          border-radius: 10px;
        }

        @media (max-width: 480px) {
          .footer {
            padding: 25px 16px;
          }

          .footer-main {
            font-size: 13px;
          }

          .footer-sub {
            font-size: 12px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-line"></div>

          <p className="footer-main">
            © 2026 <span>Bhavesh Gaurkar</span>. All Rights Reserved.
          </p>

          <p className="footer-sub">
            Built with <span>React.js</span> & passion for development.
          </p>

        </div>
      </footer>
    </>
  );
}

export default Footer;