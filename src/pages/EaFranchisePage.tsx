import { Link } from "react-router-dom";
import { eaFranchises } from "../data";

export default function EaFranchisePage({ slug }: { slug: string }) {
  const franchise = eaFranchises.find((item) => item.slug === slug)!;

  return (
    <article className="inner-page case-page ea-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb">
        <Link to="/#work">Work</Link> / <Link to="/work/ea/">EA Sports</Link> /{" "}
        <span aria-current="page">{franchise.title}</span>
      </nav>
      <header className="ea-intro">
        <p className="pf-kicker">EA Sports · Franchise overview</p>
        <h1>{franchise.title}</h1>
        <p className="ea-lead">{franchise.introduction}</p>
      </header>
      <section className="ea-coming-soon" aria-labelledby="ea-content-status">
        <h2 id="ea-content-status">Case study coming soon</h2>
        <p>Curated screenshots and a closer look at my contributions will be added here.</p>
        <Link className="pf-link" to="/work/ea/">← Back to EA Sports overview</Link>
      </section>
    </article>
  );
}
