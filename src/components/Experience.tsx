import { education, experience } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="kicker">Résumé</p>
      <h2>Professional Experience</h2>

      <ol className="timeline">
        {experience.map((job) => (
          <li className="card job" key={job.id}>
            <div className="job-meta">
              <h3>{job.role}</h3>
              <p className="role">
                {job.company} — {job.location}
              </p>
              <p className="dates">{job.dates}</p>
            </div>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="edu-grid">
        {education.map((item) => (
          <div className="card edu" key={item.school}>
            <p className="kicker">Education</p>
            <h3>{item.school}</h3>
            <p>{item.credential}</p>
            <p className="dates">{item.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
