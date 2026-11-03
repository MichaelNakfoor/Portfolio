import { Link } from "react-router-dom";
import ExpandableScreenshot from "../components/ExpandableScreenshot";
import { ncaaCaseStudy as study, ncaaEvolutionGallery, ncaaScreenshots, type NcaaScreenshot } from "../data";

function Screenshot({ screenshot }: { screenshot: NcaaScreenshot }) {
  return (
    <ExpandableScreenshot
      {...screenshot}
      title={`NCAA Football ${screenshot.titleYear}`}
      src={`/images/ea/ncaa/${screenshot.file.split("/").map(encodeURIComponent).join("/")}`}
    />
  );
}

export default function NcaaCaseStudyPage() {
  return (
    <article className="inner-page case-page ea-page ncaa-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb">
        <Link to="/#work">Work</Link> / <Link to="/work/ea/">EA Sports</Link> / <span aria-current="page">NCAA Football</span>
      </nav>
      <header className="ncaa-hero">
        <div>
          <p className="pf-kicker">EA Sports · Lead UI role · Design & production code</p>
          <h1>{study.title}</h1>
          <p className="madden-deck">{study.subtitle}</p>
          {study.introduction.map((paragraph) => <p className="ea-lead" key={paragraph}>{paragraph}</p>)}
        </div>
        <Screenshot screenshot={ncaaScreenshots.hero} />
      </header>

      <section className="ncaa-section" aria-labelledby="ncaa-foundation">
        <div className="madden-copy">
          <p className="pf-kicker">01</p><h2 id="ncaa-foundation">Adapting the Madden Framework</h2>
          {study.foundation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Screenshot screenshot={ncaaScreenshots.menu} />
      </section>

      <section className="ncaa-section ncaa-section-reversed" aria-labelledby="ncaa-scaling">
        <div className="madden-copy">
          <p className="pf-kicker">02</p><h2 id="ncaa-scaling">Accommodating More Than a Hundred Schools</h2>
          {study.scaling.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Screenshot screenshot={ncaaScreenshots.teams} />
      </section>

      <section className="ncaa-wide-section" aria-labelledby="ncaa-workflows">
        <div className="madden-copy ncaa-section-intro">
          <p className="pf-kicker">03</p><h2 id="ncaa-workflows">Recruiting and Team Management</h2>
          {study.workflows.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="ncaa-gallery">
          <Screenshot screenshot={ncaaScreenshots.recruiting} />
          <Screenshot screenshot={ncaaScreenshots.roster} />
        </div>
      </section>

      <section className="ncaa-section" aria-labelledby="ncaa-identities">
        <div className="madden-copy">
          <p className="pf-kicker">04</p><h2 id="ncaa-identities">Giving Each School Its Own Identity</h2>
          {study.theming.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Screenshot screenshot={ncaaScreenshots.teams2007} />
      </section>

      <section className="ncaa-wide-section" aria-labelledby="ncaa-displays">
        <div className="madden-copy ncaa-section-intro">
          <p className="pf-kicker">05</p>
          <h2 id="ncaa-displays">Designing for Widescreen and Standard Televisions</h2>
          {study.displays.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ExpandableScreenshot
          src="/images/ea/ncaa/TitleSafeUI.png"
          title="NCAA Football 2003 — Widescreen Layout"
          caption="Annotated illustration of the 16:9 layout and central 4:3-safe region."
          alt="Explanatory composite of the NCAA Football 2003 play-calling interface annotated to illustrate the 16:9 layout and central 4:3-safe region."
          width={1672}
          height={941}
        />
      </section>

      <section className="ncaa-wide-section" aria-labelledby="ncaa-evolution">
        <div className="madden-copy ncaa-section-intro"><p className="pf-kicker">06</p><h2 id="ncaa-evolution">Interface Evolution</h2>{study.evolution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="ncaa-gallery">
          {ncaaEvolutionGallery.map((key) => <Screenshot key={key} screenshot={ncaaScreenshots[key]} />)}
        </div>
      </section>

      <nav className="madden-next" aria-label="Related EA Sports work">
        <Link className="pf-link" to="/work/ea/">← EA Sports overview</Link>
        <Link className="pf-link" to="/work/ea/madden-nfl/">Madden NFL →</Link>
        <Link className="pf-link" to="/work/ea/central-ui/">Central UI →</Link>
      </nav>
    </article>
  );
}
