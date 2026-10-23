import { useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data";

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="pf-nav">
      <div className="pf-wrap pf-nav-inner">
        <NavLink className="pf-brand" to="/" onClick={close}>
          <span className="pf-brand-name">{profile.name}</span>
          <span className="pf-brand-role">{profile.title}</span>
        </NavLink>

        <nav aria-label="Portfolio" onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
          <ul id="portfolio-navigation" className={`pf-nav-links${menuOpen ? " is-open" : ""}`}>
            <li>
              <a href="/#work" onClick={close}>
                Work
              </a>
            </li>
            <li>
              <a href="/#about" onClick={close}>
                About
              </a>
            </li>
            <li>
              <NavLink to="/resume" onClick={close}>
                Résumé
              </NavLink>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        <div className="pf-nav-actions">
          <button
            className="pf-theme"
            type="button"
            title="Toggle theme"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={onToggleTheme}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
          <button
            className="pf-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="portfolio-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
