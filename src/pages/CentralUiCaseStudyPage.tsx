import { Link } from "react-router-dom";
import ExpandableScreenshot from "../components/ExpandableScreenshot";
import { centralUiCaseStudy as study, centralUiCycles } from "../data";

export default function CentralUiCaseStudyPage() {
  return (
    <article className="inner-page case-page ea-page central-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb"><Link to="/#work">Work</Link> / <Link to="/work/ea">EA Sports</Link> / <span aria-current="page">Central UI</span></nav>
      <header className="central-hero">
        <p className="pf-kicker">EA Sports · Shared systems · 2004 / 2005 / 2009 development cycles</p>
        <h1>{study.title}</h1>
        <p className="central-subtitle">{study.subtitle}</p>
        {study.introduction.map((paragraph) => <p className="ea-lead" key={paragraph}>{paragraph}</p>)}
      </header>

      <section className="central-section central-challenge" aria-labelledby="central-challenge">
        <p className="pf-kicker">01</p>
        <h2 id="central-challenge">Identifying What Could Be Shared</h2>
        {study.challenge.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="central-section" aria-labelledby="central-foundation">
        <div className="central-section-intro">
          <p className="pf-kicker">02</p><h2 id="central-foundation">Developing a Common Framework</h2>
          {study.foundation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <figure className="central-architecture-image">
          <img
            src="/images/ea/central-ui/Central_UI_Architecture.png"
            alt="Conceptual illustration of Central UI providing reusable interface components for Madden NFL, NCAA Football, and NASCAR Thunder, rather than a literal depiction of the proprietary architecture."
            width={1536}
            height={1024}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="central-section" aria-labelledby="central-framework">
        <div className="central-section-intro">
          <p className="pf-kicker">03</p><h2 id="central-framework">The Framework in Practice</h2>
          {study.practice.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {centralUiCycles.map((group) => (
          <section className="central-cycle" key={group.cycle} aria-labelledby={`central-cycle-${group.cycle}`}>
            <div className="central-cycle-heading"><span className="central-cycle-year">{group.cycle}<small>Development cycle</small></span><div><h3 id={`central-cycle-${group.cycle}`}>{group.title}</h3><p>{group.comparison}</p></div></div>
            <div className={`central-comparison-grid${group.screenshots.length === 3 ? " central-comparison-three" : ""}`}>
              {group.screenshots.map((screenshot) => (
                <ExpandableScreenshot key={screenshot.file} {...screenshot} title={`${screenshot.franchise} · ${group.cycle} cycle`} src={`/images/ea/central-ui/${group.cycle}/${encodeURIComponent(screenshot.file)}`} />
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="central-section central-workflow" aria-labelledby="central-workflow">
        <div><p className="pf-kicker">04</p><h2 id="central-workflow">Making UI Development More Accessible</h2>{study.workflow.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="central-authoring"><strong>iStudio + C</strong><span>Vector graphics · Specialized scripting</span><span aria-hidden="true">↓</span><strong>Adobe Flash authoring</strong><span>Interface creation for a broader developer pool</span></div>
      </section>

      <nav className="madden-next" aria-label="Related EA Sports work">
        <Link className="pf-link" to="/work/ea">← EA Sports overview</Link>
        <Link className="pf-link" to="/work/ea/madden-nfl">Madden NFL →</Link>
        <Link className="pf-link" to="/work/ea/ncaa-football">NCAA Football →</Link>
      </nav>
    </article>
  );
}
