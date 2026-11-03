import { Link } from "react-router-dom";
import ExpandableScreenshot from "../components/ExpandableScreenshot";
import { maestroCaseStudy as study, maestroFeatures } from "../data";

export default function WorkMldPage() {
  const editor = maestroFeatures.find((feature) => feature.slug === "tools")!;
  const features = ["browsing", "tools", "generators", "printing"].map((slug) => maestroFeatures.find((feature) => feature.slug === slug)!);

  return (
    <article className="inner-page case-page maestro-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb"><Link to="/#work">Work</Link> / <span aria-current="page">Maestro Label Designer</span></nav>
      <header className="maestro-hero">
        <p className="pf-kicker">ONLINE LABELS · APPLICATION DESIGN &amp; FULL-STACK DEVELOPMENT</p>
        <h1>Maestro Label Designer</h1>
        {study.introduction.map((paragraph) => <p className="ea-lead" key={paragraph}>{paragraph}</p>)}
      </header>
      <ExpandableScreenshot src={`/images/maestro/${editor.image}`} alt={editor.alt} title="Maestro Label Designer" caption={editor.caption} width={editor.width} height={editor.height} />

      <section className="maestro-section maestro-history" aria-labelledby="maestro-history">
        <p className="pf-kicker">01</p>
        <h2 id="maestro-history">From Flash to HTML5</h2>
        <div className="maestro-prose">{study.history.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <section className="maestro-comparison" aria-labelledby="maestro-workspace-comparison">
          <h3 id="maestro-workspace-comparison">The editing workspace</h3>
          <div className="maestro-comparison-grid">
            <ExpandableScreenshot src="/images/maestro/history/FlashMLD_Canvas.jpg" alt="Historical Flash editor with ribbon toolbars and stacked property panels beside a label canvas." title="Before — Flash" caption="Flash / ActionScript — Ribbon-style toolbars and stacked property panels surrounding the editing canvas." width={1224} height={640} />
            <ExpandableScreenshot src="/images/maestro/history/HTML5MLD_Canvas.jpg" alt="Historical HTML5 redesign with compact tool navigation, contextual text controls, and selected text on the label canvas." title="After — HTML5" caption="HTML5 / TypeScript — Compact tool navigation, contextual property controls, and a reorganized editing workspace." width={1224} height={640} />
          </div>
        </section>
        <section className="maestro-comparison" aria-labelledby="maestro-mail-merge-comparison">
          <h3 id="maestro-mail-merge-comparison">Mail merge and barcodes</h3>
          <div className="maestro-comparison-grid">
            <ExpandableScreenshot src="/images/maestro/history/FlashMLD_MailMergeBarcodes.jpg" alt="Historical Flash Add Field dialog with barcode import tabs, field list, barcode type, and display-text checkbox." title="Before — Flash" caption="Flash — Importing barcode fields through a tabbed dialog with a field list and configuration controls." width={956} height={780} />
            <ExpandableScreenshot src="/images/maestro/history/HTML5MLD_MailMergeBarcodes.jpg" alt="Historical HTML5 Add Field dialog grouping field selection, barcode type, alignment preview, and display options." title="After — HTML5" caption="HTML5 — A reorganized workflow grouping field selection, barcode configuration, and display options." width={1378} height={780} />
          </div>
        </section>
      </section>

      <section className="maestro-section" aria-labelledby="maestro-environment">
        <p className="pf-kicker">02</p>
        <h2 id="maestro-environment">Building the Design Environment</h2>
        <div className="maestro-prose">{study.environment.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="maestro-section" aria-labelledby="maestro-rendering">
        <p className="pf-kicker">03</p>
        <h2 id="maestro-rendering">Beyond the Browser</h2>
        <div className="maestro-prose">{study.rendering.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="maestro-section" aria-labelledby="maestro-features">
        <p className="pf-kicker">04</p>
        <h2 id="maestro-features">Inside Maestro</h2>
        <p className="maestro-prose">{study.features}</p>
        <div className="maestro-feature-grid">
          {features.map((feature, index) => (
            <Link className="maestro-feature-card" key={feature.slug} to={`/work/maestro/${feature.slug}/`}>
              <img src={`/images/maestro/${feature.image}`} alt="" width={feature.width} height={feature.height} loading="lazy" />
              <div><p className="pf-kicker">0{index + 1}</p><h3>{feature.title}</h3><p>{feature.summary}</p><span className="pf-link">Explore the feature →</span></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="maestro-section maestro-enterprise" aria-labelledby="maestro-enterprise">
        <p className="pf-kicker">05</p>
        <h2 id="maestro-enterprise">Enterprise Application Development</h2>
        <div className="maestro-prose">{study.enterprise.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="maestro-enterprise-image">
          <ExpandableScreenshot
            src="/images/maestro/enterprise/ConsolidatedLabelsPortal.png"
            title="Consolidated Labels — Custom Label Quote"
            caption="Customer-facing interface for specifying commercial label dimensions, materials, finishing options, and quantities."
            alt="Consolidated Labels Custom Label Quote interface with fields for label dimensions, materials, finishing options, and quantities."
            width={1148}
            height={859}
          />
        </div>
      </section>
      <nav className="madden-next" aria-label="Case study navigation"><Link className="pf-link" to="/#work">← Back to portfolio</Link><Link className="pf-link" to="/work/maestro/browsing/">Explore browsing & templates →</Link></nav>
    </article>
  );
}
