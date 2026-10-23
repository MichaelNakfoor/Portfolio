import { Link } from "react-router-dom";
import ExpandableScreenshot from "../components/ExpandableScreenshot";
import { tigerWoodsCaseStudy as study, tigerWoodsScreenshots } from "../data";

function Screenshot({ image }: { image: (typeof tigerWoodsScreenshots)[keyof typeof tigerWoodsScreenshots] }) {
  return (
    <ExpandableScreenshot
      {...image}
      title="Tiger Woods PGA Tour 08"
      src={`/images/ea/tiger-woods/Tiger_Woods_08/${encodeURIComponent(image.file)}`}
    />
  );
}

export default function TigerWoodsCaseStudyPage() {
  return (
    <article className="inner-page case-page ea-page tiger-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb">
        <Link to="/#work">Work</Link> / <Link to="/work/ea">EA Sports</Link> / <span aria-current="page">Tiger Woods PGA Tour 08</span>
      </nav>
      <header className="tiger-hero">
        <div>
          <p className="pf-kicker">EA Sports · UI Development Manager</p>
          <h1>{study.title}</h1>
          <p className="tiger-subtitle">{study.subtitle}</p>
          {study.introduction.map((paragraph) => <p className="ea-lead" key={paragraph}>{paragraph}</p>)}
        </div>
        <Screenshot image={tigerWoodsScreenshots.course} />
      </header>

      <section className="tiger-narrative" aria-labelledby="tiger-transition">
        <p className="pf-kicker">01</p>
        <h2 id="tiger-transition">Bringing the Franchise to Tiburon</h2>
        {study.transition.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="tiger-migration" aria-labelledby="tiger-tracks">
        <div className="tiger-narrative">
          <p className="pf-kicker">02</p>
          <h2 id="tiger-tracks">Building the Tracks While the Train Was Running</h2>
          {study.migration.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="tiger-interfaces" aria-labelledby="tiger-interfaces">
        <div className="tiger-narrative">
          <p className="pf-kicker">03</p>
          <h2 id="tiger-interfaces">Bringing It All Together</h2>
          <p>{study.delivery[0]}</p>
        </div>
        <div className="tiger-gallery">
          <Screenshot image={tigerWoodsScreenshots.challenge} />
          <Screenshot image={tigerWoodsScreenshots.confidence} />
        </div>
        <div className="tiger-narrative">
          {study.delivery.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <nav className="madden-next" aria-label="Related EA Sports work">
        <Link className="pf-link" to="/work/ea">← EA Sports overview</Link>
        <Link className="pf-link" to="/work/ea/central-ui">Central UI →</Link>
        <Link className="pf-link" to="/work/ea/madden-nfl">Madden NFL →</Link>
        <Link className="pf-link" to="/work/ea/ncaa-football">NCAA Football →</Link>
      </nav>
    </article>
  );
}
