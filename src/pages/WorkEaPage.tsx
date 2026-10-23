import { Link } from "react-router-dom";
import { eaOverview, eaFranchises } from "../data";

export default function WorkEaPage() {
  return (
    <article className="inner-page case-page ea-page ea-overview-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb">
        <Link to="/#work">Work</Link> / <span aria-current="page">EA Sports</span>
      </nav>
      <header className="ea-intro">
        <h1>{eaOverview.title}</h1>
        {eaOverview.introduction.map((paragraph) => (
          <p className="ea-lead" key={paragraph}>{paragraph}</p>
        ))}
      </header>
      <section className="ea-challenge" aria-labelledby="ea-challenge-title">
        <h2 id="ea-challenge-title">Designing for the Consoles</h2>
        {eaOverview.challenge.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section aria-labelledby="ea-franchises-title">
        <h2 id="ea-franchises-title">Explore the EA Sports Work</h2>
        <div className="pf-work-grid ea-franchise-grid ea-overview-grid">
          {eaFranchises.map((franchise) => (
            <Link className="pf-card ea-franchise-card" key={franchise.slug} to={`/work/ea/${franchise.slug}`}>
              {franchise.image ? (
                <div className="ea-franchise-media">
                  <img src={franchise.image} alt={franchise.imageAlt} loading="lazy" width="600" height="337" />
                </div>
              ) : (
                <div className="ea-franchise-media ea-media-placeholder">
                  <span aria-hidden="true">NCAA</span>
                  <small>Image placeholder · Curated imagery coming soon</small>
                </div>
              )}
              <div className="pf-card-body">
                <h3>{franchise.title}</h3>
                <p>{franchise.summary}</p>
                <span className="pf-link">Explore {franchise.title} <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
