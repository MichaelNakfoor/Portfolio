import { Link, useParams } from "react-router-dom";
import MaestroFeatureSection from "../components/MaestroFeatureSection";
import { maestroFeatures } from "../data";
import { maestroFeatureStudies } from "../maestroFeatureStudies";
import "./MaestroFeaturePage.css";

export default function MaestroFeaturePage() {
  const { slug } = useParams();
  const isBrowsing = slug === "browsing";
  const isTools = slug === "tools";
  const isPrinting = slug === "printing";
  const isGenerators = slug === "generators";
  const hasNarrativeLayout = isBrowsing || isTools || isPrinting || isGenerators;
  const feature = slug && Object.hasOwn(maestroFeatureStudies, slug) ? maestroFeatureStudies[slug] : undefined;

  if (!feature) {
    return <article className="inner-page case-page"><h1>Feature not found</h1><Link to="/work/maestro">Back to Maestro</Link></article>;
  }

  return (
    <article className={`inner-page case-page maestro-page maestro-feature-study${isBrowsing ? " maestro-browsing-study" : ""}${isTools ? " maestro-tools-study" : ""}${isPrinting ? " maestro-printing-study" : ""}${isGenerators ? " maestro-generators-study" : ""}`}>
      <nav className="ea-breadcrumb" aria-label="Breadcrumb"><Link to="/#work">Work</Link> / <Link to="/work/maestro">Maestro</Link> / <span aria-current="page">{feature.title}</span></nav>
      <header className="maestro-hero">
        <p className="pf-kicker">Maestro Label Designer · Feature study</p>
        <h1>{feature.title}</h1>
        {feature.subtitle && <p className="maestro-browsing-subtitle">{feature.subtitle}</p>}
        {Array.isArray(feature.introduction)
          ? feature.introduction.map((paragraph) => <p className="ea-lead" key={paragraph}>{paragraph}</p>)
          : <p className="ea-lead">{feature.introduction}</p>}
      </header>
      {!hasNarrativeLayout && <aside className="maestro-study-focus" aria-label="Engineering focus"><p className="pf-kicker">Design & engineering</p><p>{feature.focus}</p></aside>}
      {!hasNarrativeLayout && <nav className="maestro-study-index" aria-label="On this page">{feature.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav>}
      {feature.pipeline && <figure className="maestro-study-pipeline"><figcaption>From browser design to physical output</figcaption><ol>{feature.pipeline.map((step) => <li key={step}>{step}</li>)}</ol></figure>}
      {feature.sections.map((section, index) => <MaestroFeatureSection key={section.id} section={section} index={index} numberedOnly={hasNarrativeLayout} />)}
      <nav className="maestro-related" aria-label="Other Maestro features">{maestroFeatures.filter((item) => item.slug !== slug).map((item) => <Link className="pf-link" key={item.slug} to={`/work/maestro/${item.slug}`}>{item.title} →</Link>)}</nav>
      <nav className="madden-next" aria-label="Case study navigation"><Link className="pf-link" to="/work/maestro">← Maestro case study</Link><Link className="pf-link" to="/#work">Back to portfolio →</Link></nav>
    </article>
  );
}
