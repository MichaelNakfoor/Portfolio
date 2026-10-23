import { Link } from "react-router-dom";
import { maddenCaseStudy, maddenEvolutionGallery, maddenScreenshots, type MaddenScreenshot } from "../data";
import ExpandableScreenshot from "../components/ExpandableScreenshot";

function Screenshot({ screenshot, priority = false }: { screenshot: MaddenScreenshot; priority?: boolean }) {
  const src = `/images/ea/madden/${screenshot.file.split("/").map(encodeURIComponent).join("/")}`;
  return (
    <figure className="madden-screenshot">
      <a href={src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${screenshot.alt} (new tab)`}>
        <img src={src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading={priority ? "eager" : "lazy"} />
      </a>
      <figcaption>
        <strong>{screenshot.title ?? `Madden NFL ${screenshot.titleYear}`}</strong>
        <span>{screenshot.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function MaddenCaseStudyPage() {
  return (
    <article className="inner-page case-page ea-page madden-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb">
        <Link to="/#work">Work</Link> / <Link to="/work/ea">EA Sports</Link> / <span aria-current="page">Madden NFL</span>
      </nav>
      <header className="madden-hero">
        <div>
          <p className="pf-kicker">EA Sports · UI design & engineering</p>
          <h1>{maddenCaseStudy.title}</h1>
          <p className="madden-deck">{maddenCaseStudy.subtitle}</p>
          {maddenCaseStudy.introduction.map((paragraph) => (
            <p className="ea-lead" key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Screenshot screenshot={maddenScreenshots.hero} priority />
      </header>

      {maddenCaseStudy.sections.map((section, index) => (
        <section className={`madden-section${index % 2 === 1 ? " madden-section-reversed" : ""}`} key={section.id} aria-labelledby={section.id}>
          <div className="madden-copy">
            <p className="pf-kicker">0{index + 1}</p>
            <h2 id={section.id}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Screenshot screenshot={maddenScreenshots[section.image as keyof typeof maddenScreenshots]} />
        </section>
      ))}

      <section className="madden-controllers" aria-labelledby="madden-displays-title">
        <div className="madden-copy">
          <p className="pf-kicker">04</p>
          <h2 id="madden-displays-title">Adapting to Different Controllers</h2>
          <p>{maddenCaseStudy.controllers[0]}</p>
          <div className="madden-controller-image">
            <ExpandableScreenshot
              src="/images/ea/madden/controllers.png"
              title="Console Controller Variations"
              caption="PlayStation, Nintendo GameCube, and Xbox controllers presented different button layouts and navigation conventions that had to be considered when adapting interfaces across platforms."
              alt="PlayStation, Nintendo GameCube, and Xbox controllers shown side by side for comparison of button layouts and directional controls."
              width={1000}
              height={223}
            />
          </div>
          {maddenCaseStudy.controllers.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="madden-evolution" aria-labelledby="interface-evolution">
        <p className="pf-kicker">05</p>
        <h2 id="interface-evolution">Interface Evolution</h2>
        {maddenCaseStudy.evolution.map((paragraph) => (
          <p className="pf-section-lead" key={paragraph}>{paragraph}</p>
        ))}
        <div className="madden-gallery">
          {maddenEvolutionGallery.map((key) => <Screenshot key={key} screenshot={maddenScreenshots[key]} />)}
        </div>
      </section>
      <nav className="madden-next" aria-label="Case study navigation">
        <Link className="pf-link" to="/work/ea">← EA Sports overview</Link>
        <Link className="pf-link" to="/work/ea/ncaa-football">Next: NCAA Football →</Link>
      </nav>
    </article>
  );
}
