import { Link } from "react-router-dom";
import { about } from "../data";
import SmartImg from "./SmartImg";

export default function About({
  fullBiography = false,
  showSignature = true,
}: {
  fullBiography?: boolean;
  showSignature?: boolean;
}) {
  const paragraphs = fullBiography ? about.paragraphs : about.excerpt;
  return (
    <section className="pf-section" id="about">
      <div className="pf-wrap pf-about-content">
        <h2>{about.heading}</h2>
        <div className={fullBiography ? "pf-about-grid" : "pf-about-excerpt"}>
          {fullBiography && (
            <div className="pf-portrait">
              <SmartImg
                src="/portrait.png"
                alt="Portrait of Michael A Nakfoor"
              />
            </div>
          )}
          <div className="pf-about-copy">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {showSignature && <div className="pf-sign">{about.signature}</div>}
            {!fullBiography && (
              <Link className="pf-link" to="/about">More About Me</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
