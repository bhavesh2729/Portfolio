function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
       

        <h1>Bhavesh Gaurkar</h1>

        <h2>Full Stack Developer</h2>

        <p className="description">
          I build responsive and user-friendly web applications
          using Java, Spring Boot, React.js, Node.js and MongoDB.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="/MERN_Full_Stack_Developer.pdf" className="btn secondary-btn" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;