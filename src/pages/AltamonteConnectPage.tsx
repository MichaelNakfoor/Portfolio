import { Link } from "react-router-dom";
import ExpandableScreenshot from "../components/ExpandableScreenshot";
import "./AltamonteConnectPage.css";

const imageDirectory = "/images/altamonte";

const phoneScreens = [
  { file: "IMG_8592.PNG", title: "Resident home", alt: "Home screen with English and Spanish options and shortcuts to resident services.", caption: "The home screen gives residents a place to choose a language and find common services." },
  { file: "IMG_8593.PNG", title: "Issue category", alt: "Issue categories including roads, sidewalks, streetlights, and flooding.", caption: "The first step uses everyday terms to help residents classify the issue." },
  { file: "IMG_8595.PNG", title: "Photo and description", alt: "Report form filled in with a photo of a fallen stop sign and a short description.", caption: "A photo and a brief description give the report context." },
  { file: "IMG_8596.PNG", title: "Location confirmation", alt: "Report location marked on a map with controls to adjust or confirm the pin.", caption: "Residents can confirm the proposed location or move the pin." },
  { file: "IMG_8597.PNG", title: "Report review", alt: "Review screen showing the issue category, photo, description, and reported location.", caption: "The review step brings the details together and lets residents edit each part." },
  { file: "IMG_8598.PNG", title: "Report confirmation", alt: "Prototype confirmation screen with a sample report reference and status.", caption: "The prototype shows how a reference number and next actions could appear after submission." },
  { file: "IMG_8600.PNG", title: "Traffic & Road Alerts", alt: "Traffic and road alerts screen with road closure and alert options.", caption: "The screen groups road closures and alert options in one place." },
  { file: "IMG_8599.PNG", title: "Collection Schedule", alt: "Collection schedule showing household trash, yard waste, and spring cleanup information.", caption: "The schedule groups pickup information by type of collection." },
];

export default function AltamonteConnectPage() {
  return (
    <article className="inner-page case-page altamonte-page">
      <nav className="ea-breadcrumb" aria-label="Breadcrumb">
        <Link to="/#work">Work</Link> / <span aria-current="page">Altamonte Connect</span>
      </nav>
      <header className="altamonte-hero">
        <p className="pf-kicker">Independent Concept</p>
        <h1>Altamonte Connect</h1>
        <p className="altamonte-subtitle">Product Design · Figma · Interactive Prototyping</p>
      </header>

      <section aria-labelledby="altamonte-introduction">
        <h2 id="altamonte-introduction">Introduction</h2>
        <div className="altamonte-prose">
          <p>I designed Altamonte Connect around a few things a resident might need to do from a phone, like report a damaged sign, check a collection day, or look up road closures. I wanted those tasks to be easy to find from one home screen in either English or Spanish.</p>
          <p>This was an independent design project that I prototyped in Figma. It has no affiliation with the City of Altamonte Springs, and the reports shown here are examples from the prototype.</p>
        </div>
      </section>

      <section aria-labelledby="altamonte-screens">
        <h2 id="altamonte-screens">Selected Screens</h2>
        <div className="altamonte-phone-gallery">
          {phoneScreens.map(({ file, ...screen }) => (
            <ExpandableScreenshot key={file} {...screen} src={`${imageDirectory}/${file}`} width={1179} height={2556} />
          ))}
        </div>
      </section>

      <section aria-labelledby="altamonte-experience">
        <h2 id="altamonte-experience">Designing the Experience</h2>
        <div className="altamonte-prose">
          <p>I mapped out how residents would get from the home screen to the service they needed. Tasks like checking a schedule lead straight to the information, while reporting an issue needs a sequence that keeps track of what the resident has already entered.</p>
          <ol>
            <li>Select an issue category.</li>
            <li>Add a photo and description.</li>
            <li>Confirm or adjust the location.</li>
            <li>Review and submit the report.</li>
          </ol>
          <p>I used the flowchart to map the location adjustment loop before wiring the screens together in Figma. The review step provides another chance to correct the details before reaching the prototype confirmation.</p>
        </div>
        <div className="altamonte-design-gallery">
          <ExpandableScreenshot src={`${imageDirectory}/figma03.png`} width={386} height={485} title="Reporting flowchart" alt="Flowchart for issue reporting with a branch to adjust the map pin before review." caption="The location step branches so residents can adjust the pin and confirm it before reviewing the report." />
          <ExpandableScreenshot src={`${imageDirectory}/figma01.png`} width={1260} height={948} title="Reporting prototype" alt="Figma canvas with prototype connections between the report category, photo, and map screens." caption="I connected the report steps in Figma to walk through the main path and location adjustment." />
          <ExpandableScreenshot src={`${imageDirectory}/figma02.png`} width={1108} height={990} title="Figma workspace" alt="Figma workspace showing groups of related mobile screens." caption="Related screens are grouped by task so the broader structure stays visible while editing individual screens." />
        </div>
      </section>

      <section aria-labelledby="altamonte-localization">
        <h2 id="altamonte-localization">Reusable Interface &amp; Localization</h2>
        <div className="altamonte-prose">
          <p>I reused Figma components and visual patterns for service cards, buttons, and navigation. The main destinations stay in the same place across service screens, while the reporting screens use a progress indicator and back control to show where the resident is in the form.</p>
          <p>I organized English and Spanish text side by side in Figma, including navigation labels, prompts, and actions. Keeping the wording together made it easier to see where a longer label needed room in the same component.</p>
        </div>
        <div className="altamonte-localization-image">
          <ExpandableScreenshot src={`${imageDirectory}/figma04.png`} width={770} height={845} title="English and Spanish content" alt="Figma text variables with English and Spanish values in adjacent columns." caption="The text table keeps corresponding English and Spanish labels and prompts together." />
        </div>
      </section>

      <nav className="madden-next" aria-label="Case study navigation">
        <Link className="pf-link" to="/#work">← Back to portfolio</Link>
      </nav>
    </article>
  );
}
