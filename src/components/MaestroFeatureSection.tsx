import { Link } from "react-router-dom";
import ExpandableScreenshot from "./ExpandableScreenshot";
import type { MaestroStudySection } from "../maestroFeatureStudies";

export default function MaestroFeatureSection({ section, index, numberedOnly = false }: { section: MaestroStudySection; index: number; numberedOnly?: boolean }) {
  return (
    <section className="maestro-section maestro-study-section" id={section.id} aria-labelledby={`${section.id}-heading`}>
      <div className="maestro-study-copy">
        <p className="pf-kicker">{String(index + 1).padStart(2, "0")}{!numberedOnly && " · Workflow & engineering"}</p>
        <h2 id={`${section.id}-heading`}>{section.title}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.related && <Link className="pf-link" to={section.related.to}>{section.related.label} →</Link>}
      </div>
      {section.images.length > 0 && <div className={`maestro-study-gallery${section.images.length === 1 ? " maestro-study-gallery-single" : ""}`}>
        {section.images.map((image) => <ExpandableScreenshot key={image.src} {...image} source="" />)}
      </div>}
    </section>
  );
}
