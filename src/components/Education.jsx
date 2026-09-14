function Education() {
  return (
    <section id="education" className="education">
      <div className="section-container">

        <p className="section-title">Education</p>

        <h2>My Education</h2>

        <div className="education-grid">

          <div className="education-card">
            <h3>B.Tech – Information Technology</h3>
            <h4>V.M. Institute of Engineering and Technology</h4>
            <p>Nagpur, Maharashtra</p>
            <span>2021 – 2024 | CGPA: 6.65</span>
          </div>

          <div className="education-card">
            <h3>Diploma – Information Technology</h3>
            <h4>Government Polytechnic, Bramhapuri</h4>
            <p>Maharashtra</p>
            <span>2018 – 2021 | 80.75%</span>
          </div>

        </div>

        <div className="achievement">

          <p className="section-title">Achievement</p>

          <h2>Hockey Achievement</h2>

          <div className="achievement-card">
            <h3>🏑 All India 2nd Place</h3>

            <p>
              Represented at State and National level hockey competitions
              and secured All India 2nd place.
            </p>

            <span>Best Defender Medal</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;