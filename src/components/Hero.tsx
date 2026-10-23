import { profile } from "../data";
import SmartImg from "./SmartImg";

const frames = [
  {
    className: "pf-frame pf-frame-tw",
    src: "/hero-tw.png",
    fallback: "/hero-collage.jpg",
    alt: "Tiger Woods PGA Tour screen",
  },
  {
    className: "pf-frame pf-frame-cl",
    src: "/hero-cl.png",
    fallback: "/hero-collage.jpg",
    alt: "Consolidated Label",
  },
  {
    className: "pf-frame pf-frame-madden",
    src: "/hero-madden.png",
    fallback: "/hero-collage.jpg",
    alt: "Madden NFL interface",
  },
  {
    className: "pf-frame pf-frame-maestro",
    src: "/hero-maestro.png",
    fallback: "/hero-collage.jpg",
    alt: "Maestro Label Designer",
  },
];

export default function Hero() {
  return (
    <section className="pf-hero" id="top">
      <div className="pf-wrap pf-hero-grid">
        <div>
          <h1>
            I design and build
            <br />
            software for <span className="pf-grad">people.</span>
          </h1>
          {profile.lede.map((paragraph) => (
            <p className="pf-hero-lead" key={paragraph}>{paragraph}</p>
          ))}
          <div className="pf-cta-row">
            <a className="pf-btn pf-btn-primary" href="#work">
              View my work →
            </a>
            <a
              className="pf-btn pf-btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="pf-hero-art" aria-hidden="true">
          {frames.map((frame) => (
            <div className={frame.className} key={frame.src}>
              <SmartImg src={frame.src} fallback={frame.fallback} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
