import { Link } from "react-router-dom";
import ExpandableScreenshot from "../components/ExpandableScreenshot";
import { workshopApplications } from "../data";
import "./WorkshopPage.css";

export default function WorkshopPage() {
  return (
    <article className="inner-page case-page workshop-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb"><Link to="/#work">Work</Link> / <span aria-current="page">Mike's Workshop</span></nav>
      <header className="workshop-hero">
        <p className="pf-kicker">Independent work &middot; Application design &amp; full-stack development</p>
        <h1>Mike's Workshop</h1>
        <p className="workshop-subtitle">Personal Projects &amp; Full-Stack Development</p>
        <p className="ea-lead">I've always enjoyed having projects of my own, and Workshop gives me a place to combine programming with things that interest me outside of work. It's a collection of applications I've designed and developed for everyday use, including weather forecasting, task management, backyard chicken keeping, and a blackjack game.</p>
        <p className="ea-lead">The applications are built with C# and Blazor on .NET, with SQL Server providing persistent storage where needed. They're also an opportunity to experiment with technologies, revisit older projects, and work through design and engineering problems without the constraints of a commercial development schedule.</p>
        <ul className="central-franchise-pills" aria-label="Technology stack">{["C#", ".NET", "Blazor", "SQL", "API integration", "UI design"].map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </header>
      {workshopApplications.map((app, index) => (
        <section className="workshop-application" key={app.id} aria-labelledby={app.id}>
          <p className="pf-kicker">0{index + 1}</p>
          <h2 id={app.id}>{app.title}</h2>
          <div className="workshop-prose">{app.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="workshop-gallery">{app.screenshots.map((screenshot) => <ExpandableScreenshot key={screenshot.file} {...screenshot} src={`/images/workshop/${screenshot.file}`} />)}</div>
        </section>
      ))}
      <section className="workshop-closing" aria-labelledby="workshop-design">
        <p className="pf-kicker">05</p><h2 id="workshop-design">A Workshop of My Own</h2>
        <p>Workshop has its own visual personality, with vintage-inspired branding, dark backgrounds, and individual interfaces designed around each application's purpose.</p>
        <p>More importantly, these projects give me opportunities to continue working across the entire application stack. Whether I'm integrating an external API, designing a relational database, implementing application logic, or refining an interface, there's usually another feature I want to add or something I think I can improve.</p>
      </section>
      <nav className="madden-next" aria-label="Case study navigation"><Link className="pf-link" to="/#work">&larr; Back to portfolio</Link></nav>
    </article>
  );
}
