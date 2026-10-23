import { Link } from "react-router-dom";
import { projects } from "../data";
import SmartImg from "./SmartImg";

const fallbacks: Record<string, string> = {
  "ea-sports": "/card-ea.png",
  maestro: "/card-maestro.png",
};

export default function Work() {
  return (
    <section className="pf-section" id="work">
      <div className="pf-wrap">
        <h2>Featured Work</h2>
        <p className="pf-section-lead">
          I've worked on a fairly wide variety of software, from console games to commercial web applications. These projects offer a closer look at some of that work, including the design decisions, technical challenges, and occasional complications involved in bringing it all together.
        </p>

        <div className="pf-work-grid">
          {projects.map((project) => (
            <article className="pf-card" key={project.id}>
              {project.href && project.image ? <Link to={project.href} className="pf-card-media">
                <SmartImg
                  src={project.image}
                  fallback={fallbacks[project.id]}
                  alt={project.imageAlt}
                />
              </Link> : (
                <div className="pf-workshop-apps">
                  <span className="pf-kicker">Independent applications</span>
                  <ul aria-label="Workshop applications">
                    {project.applications?.map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="pf-card-body">
                <h3>{project.title}</h3>
                <div className="pf-card-role">{project.role}</div>
                {project.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="pf-tags">
                  {project.tags.map((tag, index) => (
                    <span key={tag}>
                      {index === 0 ? tag : `· ${tag}`}
                    </span>
                  ))}
                </div>
                {project.href && (
                  <Link className="pf-link" to={project.href}>
                    Explore {project.title} →
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
