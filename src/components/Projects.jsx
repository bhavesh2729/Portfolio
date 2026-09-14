function Projects() {
  const projects = [
    {
      title: "VenusMart",
      category: "E-Commerce Web Application",
      description:
        "A full-stack e-commerce web application with user authentication, product management, cart, wishlist, orders, reviews and online payment integration.",
      technologies:
        "Node.js, Express.js, EJS, MongoDB, Mongoose, Bootstrap",
      github: "https://github.com/bhavesh2729/VenusMart",
      live: "https://venusmart.onrender.com"
    },

    {
      title: "Spotify",
      category: "Music Streaming Web Application",
      description:
        "A music streaming web application with Admin/User roles, song management, search, categories, playlists, liked songs and a custom music player.",
      technologies:
        "Node.js, Express.js, EJS, MongoDB, Mongoose, Bootstrap",
      github: "https://github.com/bhavesh2729/Spotify",
      live: "https://spotify-iqt8.onrender.com"
    },

    {
      title: "Wanderlust",
      category: "Travel Stay & Booking Platform",
      description:
        "A travel stay and booking platform with authentication, property listings, reviews, image uploads, maps and booking-related features.",
      technologies:
        "Node.js, Express.js, MongoDB, EJS, Cloudinary, Mapbox",
      github: "https://github.com/bhavesh2729/Wanderlust-Project",
      live: "https://wanderlust-project-52dr.onrender.com"
    }
  ];

  return (
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
                <strong>Tech:</strong> {project.technologies}
              </p>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;