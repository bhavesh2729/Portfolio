
function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript"]
    },

    {
      title: "Frontend ",
      skills: ["React.js", "HTML5", "CSS3", "EJS", "Bootstrap"]
    },

    {
      title: "Backend ",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Node.js",
        "Express.js",
        "REST APIs",
        "AWS"
      ]
    },

    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "Mongoose", "DBMS"]
    },

    {
      title: "Developer Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "IntelliJ IDEA",
        "Eclipse",
        "STS"
      ]
    },

    {
      title: "Core Concept",
      skills: [
        "Data Structures & Algorithms",
        "Java Collection Framework",
        "Object-Oriented Programming",
        "Exception Handling",
        "Multithreading",
        "Computer Networks"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <p className="section-title">My Skills</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;

