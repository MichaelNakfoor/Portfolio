import { stackPills } from "../data";

export default function Skills() {
  return (
    <section className="pf-section" id="skills">
      <div className="pf-wrap">
        <div className="pf-stack">
          <div className="pf-stack-intro">
            <div className="pf-stack-icon" aria-hidden="true">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 20h8M9 9l2.2 2.2L15 8" />
              </svg>
            </div>
            <div>
              <h3>Technologies &amp; Tools</h3>
            </div>
          </div>

          <div className="pf-tech">
            {stackPills.map((tech) => (
              <div className="pf-tech-item" key={tech.label}>
                <div className="pf-tech-badge" aria-hidden="true">
                  {tech.icons.map((icon) => (
                    <img key={icon} src={`/images/tech-icons/${icon}.svg`} alt="" width={44} height={44} />
                  ))}
                </div>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
