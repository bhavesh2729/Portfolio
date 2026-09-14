function Experience() {
  return (
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
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>REST API</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;